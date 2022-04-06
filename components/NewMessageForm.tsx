import { ChangeEvent, SyntheticEvent, useState } from "react"
import { mutate } from "swr";
import Message from "./Message";

const NewMessageForm = () => {
    const [pseudo, setPseudo] = useState("")
    const [message, setMessage] = useState("")

    const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) => setPseudo(event.target.value);
    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

    const handleSubmit = (event: SyntheticEvent) => {
        // Prevent browser to submit
        event.preventDefault()

        // Validate data 
        if (pseudo.length === 0 || message.length === 0) {
            return
        }

        // Send data
        fetch("https://ensmn.herokuapp.com/messages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: pseudo,
                message: message
            })
        })

        // Refresh messages
        mutate("https://ensmn.herokuapp.com/messages")

        // clear stata
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div id="pseudo">
                <label className="form-label">Pseudo</label>
                <input className="form-control" onChange={handlePseudoChange} value={pseudo} />
            </div>
            <div id="message">
                <label className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={handleMessageChange} value={message}></textarea>
            </div>
            <div id="button">
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </div>
        </form>
    )
}

export default NewMessageForm
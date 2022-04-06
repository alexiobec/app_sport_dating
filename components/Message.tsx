interface Props {
    body: string
    author: string
    date: Date
}

const convert_date = (date: Date): string => {
    return date.toISOString().replace('T', ' à ').slice(0, -5)
}

const Message = ({ body, author, date }: Props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{convert_date(date)}</h6>
                <p className="card-text">{body}</p>
            </div>
        </div>
    )
}

export default Message
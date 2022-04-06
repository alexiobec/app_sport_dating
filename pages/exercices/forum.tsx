import type { NextPage } from 'next'
import MessagesList from '../../components/MessagesList'
import NewMessageForm from '../../components/NewMessageForm'

const Forum: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">
        {/* <MessagesList /> */}
        <div className="container py-3">
          <MessagesList />
        </div>

      </div>
      <div id="new-message-container">
        <NewMessageForm />
      </div>
    </div>
  )
}

export default Forum

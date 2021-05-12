import React from 'react'
import Message from './Message'

function Chat() {
  const messages = []
  return (
    messages.map(message => {
    return <Message
        typeChat={message.typeChat}
        title={message.user}
        content={message.content}
        timestamp={message.timestamp}
      />
  })
  )
}

export default Chat

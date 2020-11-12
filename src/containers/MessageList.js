import React from 'react'
import Message from '../components/Message'

function MessageList(props){
  return (
  <>
    <ol>
      {props.messages.map(message => <Message content={message.content} username={message.username} key={message.id}/>)}
    </ol>
  </>
  )
}


export default MessageList

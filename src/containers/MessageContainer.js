import React from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { v4 as uuidv4 } from 'uuid';

class MessageContainer extends React.Component {

  state = {
    messages: [
      {
        id: 1,
        username: "1NiteAtFreddys",
        content: "Starting a new movie where I kill a bunch of coding school students. Calling it Freddy vs. JSON"
      },
      {
        id: 2,
        username: "NotThatMikeMyers",
        content: "Freddy curses too much for my taste - Michael Myers"
      },
      {
        id: 3,
        username: "1NiteAtFreddys",
        content: "Honestly I've found everyone's nightmares are bad enough without my help today. -FK"
      }
    ]
  }

  addMessage = (message) => {
    const newMessage = {...message, id: uuidv4()}
    this.setState({messages: [...this.state.messages, newMessage]})
  }

  render(){
    return(
      <>
        <MessageForm addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages} cheese="squirrel"/>
      </>
    )
  }
}

export default MessageContainer

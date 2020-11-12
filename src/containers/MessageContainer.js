import React from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { v4 as uuidv4 } from 'uuid';

class MessageContainer extends React.Component {

  state = {
    messages: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(json => this.setState({ messages: json }))
  }

  addMessage = (message) => {
    // const newMessage = {...message, id: uuidv4()}
    fetch('http://localhost:3000/messages', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    .then(response => response.json())
    .then(newMessage => this.setState({messages: [...this.state.messages, newMessage]}))
  }

  render(){
    return(
      <>
        <MessageForm addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages}/>
      </>
    )
  }
}

export default MessageContainer

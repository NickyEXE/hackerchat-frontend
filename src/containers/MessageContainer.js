import React from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'

class MessageContainer extends React.Component {

  state = {
    name: null,
    messages: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/channels/1")
    .then(res => res.json())
    .then(json => this.setState({messages: json.messages, name: json.name}))
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
        <h3>#{this.state.name}</h3>
        <MessageForm addMessage={this.addMessage}/>
        <MessageList messages={this.state.messages}/>
      </>
    )
  }
}

export default MessageContainer

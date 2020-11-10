import React from 'react'
import LikeButton from './LikeButton'

class Message extends React.Component {

  state = {
    numberOfLikes: 0,
  }

  // constructor(){
  //   super()
  //   this.onClick = this.onClick.bind(this)
  // }

  onClick = () => {
    this.setState({numberOfLikes: this.state.numberOfLikes + 1})
  }

  render(){
    return (<li><strong>{this.props.user}:</strong>{ this.props.text } <LikeButton onClick={this.onClick} numberOfLikes={this.state.numberOfLikes}/> </li>)
  }
}

export default Message

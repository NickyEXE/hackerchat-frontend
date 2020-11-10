import React, {Component} from 'react'

export default class MessageForm extends Component {

  state = {
    user: "",
    text: ""
  }

  onChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state)
    this.setState({
      user: "",
      text: ""
    })
  }

  render(){
    return(<form onSubmit={this.onSubmit}>
      <label>
        User:
        <input type="text" name="user" value={this.state.user} onChange={this.onChange} />
      </label><br/>
      <label>
        Message:
        <input type="text" name="text" value={this.state.text} onChange={this.onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }

}

// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import MessageContainer from './containers/MessageContainer'
import ChannelContainer from './containers/ChannelContainer'

class App extends Component {
  render(){
    return (<>
        <header>
        <h1>Welcome to Hacker Chat</h1>
        <h3>A place for hackers and slashers to cut loose and cut flesh</h3>
        </header>
        <ChannelContainer/>
        <main><MessageContainer/></main>
      </>
    );
  }
}

export default App;

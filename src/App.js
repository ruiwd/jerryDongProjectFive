import React, {Component} from 'react';
import Home from './Home';
import Nav from './Nav'
import Messenger from './Messenger'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      currentPage:''
    }
  }

  componentDidMount() {
    document.getElementById('home').classList.toggle('show');
  }

  selectPage = (page) => {
    this.setState({
      currentPage:page,
    })

    document.querySelector(`section.show`).classList.toggle('show');
    document.querySelector(`li.selected`).classList.toggle('selected');
    document.getElementById(page).classList.toggle('show');
    document.querySelector(`li.${page}`).classList.toggle('selected');
  }

  render() {
    return (
      <div className="app">
        <Nav selectPage={this.selectPage}/>
        <main>
          <Home />
          <Messenger roomName={'roomOne'} topic={'What is the meaning of life?'}/>
          <Messenger roomName={'roomTwo'} topic={'Permanently sticky or permanently damp?'}/>
          <Messenger roomName={'roomThree'} topic={'Free banter!'}/>
        </main>
      </div>
      
    );
  }
}

export default App;


// General Messenger App
// 0. Home page displays topics to choose from (only one for MVP)
//   0.1. Prechosen by coder: "What is the meaning of life?"
//   *0.2. Generate new topic every 24 hours from a random API (setInterval, setState)
// 1. All preexisting messages are rendered in the window from firebase (on render)
// *2. User can input their display name (setState)
//   *2.1. Saved as a const that will attach to their message 
// 3. Typed messages are saved in the firebase server (onSubmit) and rendered onto the screen
// *4. User can generate topics themselves.
// *5. Giphy/image functionality.
// *6. Make it look pretty
// *7 can remove messages (contextMenu)
// *8. Add authentication for users so they may only edit their own messages

// *Stretch goals
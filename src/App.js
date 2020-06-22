import React, {Component, Fragment} from 'react';
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    );
  }
}

export default App;


// General Messenger App
// 0. Home page displays topics to choose from
//   0.1. Prechosen by coder
//   *0.2. Generate new topic every 24 hours from a random API (setInterval, setState)
// 1. All preexisting messages are rendered in the window (on render)
//   1.1. Saved on a firebase server
// 2. User can input their display name (setState)
//   2.1. Saved as a const that will attach to their message 
// 3. Typed messages are further input into the firebase server (onSubmit) and rendered in the screen
// *4. User can generate topics themselves.
// *5. Giphy/image functionality.
// *6. Make it look pretty
// *7 can remove messages (contextMenu)
import React, {Component} from 'react';
import firebase from 'firebase';

class Input extends Component {
  constructor(){
    super();
    this.state = {
      userInput:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  msgSubmit = (e) => {
    e.preventDefault();

    if (this.state.userInput !== '') {
      const msgRef = firebase.database().ref('roomOne');
      msgRef.push(this.state.userInput);

      document.getElementById('userInput').value = '';
      this.setState({userInput:''})

      setTimeout(function(){document.getElementById('scrollDummy').scrollIntoView({behavior: "smooth"})},100);
    }
  }

  enterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById('submitBtn').click();
    }
  }

  render () {
    return (
      <div className="sendMsg">        
        <form className="send" onKeyPress={this.enterKey} action="submit" onSubmit={this.msgSubmit}>
          <textarea value={this.state.userInput} name="userInput" id="userInput" onChange={this.handleChange}></textarea>
          <button id="submitBtn" type="submit">Send</button>
        </form>
      </div>
    )
  }
};

export default Input;
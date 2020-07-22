import React, {Component} from 'react';
import firebase from 'firebase';

class Input extends Component {
  constructor(){
    super();
    this.state = {
      userInput:'',
      userName:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  msgSubmit = (e) => {
    e.preventDefault();

    if (this.state.userInput !== '') {
      const msgRef = firebase.database().ref(this.props.roomName);
      msgRef.push({
        userName: this.state.userName,
        msgBody: this.state.userInput
      });

      document.getElementById('userInput').value = '';
      this.setState({userInput:''})

      document.querySelector(`input.userName${this.props.roomName}`).setAttribute("disabled", "");
      document.querySelector(`input.userName${this.props.roomName}`).setAttribute("style", "opacity:0.5");

      const elemID = "scrollDummy"+this.props.roomName
      setTimeout(function(){document.getElementById(elemID).scrollIntoView({behavior: "smooth"})},100);
    }
  }

  enterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.querySelector(`.submitBtn${this.props.roomName}`).click();
    }
  }

  componentDidUpdate () {
    const elemID = "scrollDummy"+this.props.roomName;
    const pageLoadScroll = () => {document.getElementById(elemID).scrollIntoView({behavior: "smooth"})};
    pageLoadScroll();
  }

  render () {
    return (
      <div className="sendMsg">        
        <form className="send" onKeyPress={this.enterKey} action="submit" onSubmit={this.msgSubmit}>
          <input className={`userName${this.props.roomName}`} type="text" placeholder="ID" maxlength="10" required value={this.state.userName} name="userName" id="userName" onChange={this.handleName}/>
          <div className="msgText">            
            <textarea value={this.state.userInput} name="userInput" id="userInput" onChange={this.handleChange}></textarea>
            <button className={`submitBtn${this.props.roomName}`} type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Input;
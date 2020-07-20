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
      const msgRef = firebase.database().ref(this.props.roomNumber);
      msgRef.push({
        userName: this.state.userName,
        msgBody: this.state.userInput
      });

      document.getElementById('userInput').value = '';
      this.setState({userInput:''})

      document.querySelector(`input.userName${this.props.roomNumber}`).setAttribute("disabled", "");
      document.querySelector(`input.userName${this.props.roomNumber}`).setAttribute("style", "opacity:0.5");

      const elemID = "scrollDummy"+this.props.roomNumber
      setTimeout(function(){document.getElementById(elemID).scrollIntoView({behavior: "smooth"})},100);
    }
  }

  enterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.querySelector(`.submitBtn${this.props.roomNumber}`).click();
    }
  }

  componentDidUpdate () {
    const elemID = "scrollDummy"+this.props.roomNumber;
    const pageLoadScroll = () => {document.getElementById(elemID).scrollIntoView({behavior: "smooth"})};
    pageLoadScroll();
  }

  render () {
    return (
      <div className="sendMsg">        
        <form className="send" onKeyPress={this.enterKey} action="submit" onSubmit={this.msgSubmit}>
          <input className={`userName${this.props.roomNumber}`} type="text" placeholder="ID" required value={this.state.userName} name="userName" id="userName" onChange={this.handleName}/>
          <div className="msgText">            
            <textarea value={this.state.userInput} name="userInput" id="userInput" onChange={this.handleChange}></textarea>
            <button className={`submitBtn${this.props.roomNumber}`} type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Input;
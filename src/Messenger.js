import React, {Component} from 'react';
import firebase from './firebase';
import Input from './Input';

class Messenger extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(this.props.roomNumber);

    // dbRef.set('')

    dbRef.on('value', (response) => {

      const oldMsg = Object.values(response.val())

      this.setState({
        messages: oldMsg,
      })
    })
  }

  render () {
    return (
      <section id={this.props.roomNumber} className={this.props.roomNumber} className="messenger">
        <h2>Topic: {this.props.topic}</h2>
        <div className="showMsg">
          <ul className="oldMsg" >
            {this.state.messages.map((message, index) => {
              return <li key={index}><p className="userName">{message.userName}:</p><p className="msgBody">{message.msgBody}</p></li>
            })}
          </ul>
          <div id={`scrollDummy${this.props.roomNumber}`}></div>
        </div>
        <Input roomNumber={this.props.roomNumber}/>
      </section>
    )
  }
}

export default Messenger
import React, {Component} from 'react';
import firebase from './firebase';
import Input from './Input';

class Messenger extends Component {
  constructor() {
    super();
    this.state = {
      roomOne: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref('roomOne');

    // dbRef.set('')

    dbRef.on('value', (response) => {

      const oldMsg = Object.values(response.val())

      this.setState({
        roomOne: oldMsg,
      })
    })
  }

  render () {
    return (
      <section id="roomOne" className="roomOne">
        <h2>Topic: What is the meaning of life?</h2>
        <div className="showMsg">
          <ul className="oldMsg" >
            {this.state.roomOne.map((message, index) => {
              return <li key={index}>{message}</li>
            })}
          </ul>
          <div id="scrollDummy" className="scrollDummy"></div>
        </div>
        <Input />
      </section>
    )
  }
}

export default Messenger
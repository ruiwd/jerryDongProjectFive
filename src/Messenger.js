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

  
  autoScroll = () => {
    document.getElementById('scrollDummy').scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {

    this.autoScroll();

    const dbRef = firebase.database().ref('messages');

    // dbRef.push('Topic of the day')

    dbRef.on('value', (response) => {

      const oldMsg = Object.values(response.val())

      this.setState({
        messages: oldMsg,
      })
    })
  }

  componentDidUpdate() {
    this.autoScroll();
  }

  render () {
    return (
      <section className="messenger">
        <div className="showMsg">
          <ul className="oldMsg" >
            {this.state.messages.map((message) => {
              return <li>{message}</li>
            })}
          </ul>
          <div id="scrollDummy"></div>
        </div>
        <Input />
      </section>
    )
  }
}

export default Messenger
import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <section id="home" className="home">
        <h1>
          Welcome to my Discussion Board!
        </h1>
        <h2>Select a room to join and chat away!</h2>
        <footer><a href="https://ruiwd.me">Rui Wang-Dong</a> &copy; 2020</footer>
      </section>
    )
  }
}

export default Home;
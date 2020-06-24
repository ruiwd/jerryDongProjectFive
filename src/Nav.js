import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
        <ul className="nav">
          <li className="home selected" onClick={()=>this.props.selectPage('home')}>Home</li>
          <li className="roomOne" onClick={()=>this.props.selectPage('roomOne')}>Room 1</li>
          {/* <li>Room 2</li>
          <li>Room 3</li> */}
        </ul>
    )
  }
}

export default Nav;
import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul>
          <ul>
              <li><a href="#About">About</a></li>
              <li><a href="#Mission">Mission</a></li>
              <li><a href="#Contact">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;

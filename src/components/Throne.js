import React, { Component } from 'react';
import throne from '../images/throne.png';

class Throne extends Component {
  render() {
    return (
      <div>
        <img className="img-centered" src={throne} alt="throne" />
      </div>
    );
  }
}

export default Throne;
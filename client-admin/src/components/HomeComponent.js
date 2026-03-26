import React, { Component } from 'react';
import admin123 from "../dist/img/12.jpg"
class Home extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">ADMIN HOME</h2>
        <img src={admin123} alt="1" style={{width :'600px',height :'600px'}}/>
      </div>
    );
  }
}

export default Home;
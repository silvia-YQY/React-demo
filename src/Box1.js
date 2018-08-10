import React, { Component } from 'react';
import './Box1.css'

class BoxOne extends Component {
  render() {
    console.log(this.props.ID)
    return ( 
      <div className="BoxOne">
        <div> {this.props.ID || 'box 1'  } </div>
        <div>Box one </div>
      </div>
    );
  }
} 

export default BoxOne;

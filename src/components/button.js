import React, { Component } from 'react';
import './button.css'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      acitve: false,
      deltaX: 0,
      deltaY: 0
    };
    this.myRef = React.createRef();
  }
  render() {
    return (
      <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}>
        <span className="value">{this.props.value} </span>
        {/* {this.props.value} */}
        {this.state.active === true ? (
        <span className="circle"
          onAnimationEnd={this.y.bind(this)}
          style={{ left: this.state.deltaX, top: this.state.deltaY }}
        /> ): (
          ''
          )}
      </button>
    );
  }
  x(event) {
    let { x, y } = this.myRef.current.getBoundingClientRect()
    let { clientX, clientY } = event

    let deltaX = clientX - x - 5
    let deltaY = clientY - y - 5
    console.log('x,y', deltaX, deltaY)
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    })

    console.log('button组件内部')
    this.props.onClick && this.props.onClick.call(null,'Hi')
  }
  y(){
    this.setState({
      active: false,
    })
  }
}

export default Button;

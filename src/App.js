import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Button value="按钮" onClick={this.log.bind(this)}/>
        <Button value="按钮"/>
        <Button value="按钮"/>
      </div>
    );
  }
  log(e){
    console.log('APP组件')
    console.log('ee',e)
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Grid from './component/Grid.js'

class App extends Component {
  state= {
    sizeGrid: 1,
    x: 0,
    y: 0
  }

  sizeGridHandler = () => {
    this.setState( {
      sizeGrid: this.state.sizeGrid + 1
    });
  }
  rigthHandler = () => {
    if(this.state.x < (this.state.sizeGrid - 1)){
      this.setState( {
        x: this.state.x + 1
      });

    }
  }
  leftHandler = () => {
    if(this.state.x > 0){
      this.setState( {
        x: this.state.x - 1
      });
    }
  }
  upHandler = () => {
    if(this.state.y < this.state.sizeGrid){
      this.setState( {
        y: this.state.y + 1
      });
    }
  }
  downHandler = () => {
    if(this.state.y > 0){
      this.setState( {
        y: this.state.y - 1
      });
    }
  }
  render() {
    return (
      <div className="App">
      <h1>Hoover</h1>
        <p>Position: {this.state.x}, {this.state.y}</p>
        <button onClick = {this.sizeGridHandler} >
          Grid Size: {this.state.sizeGrid}x{this.state.sizeGrid}
        </button>
        <p>{console.log(<tr id={`${this.state.y}`}><td className={`${this.state.x}`}></td></tr>)}</p>
        < Grid sizeGrid ={this.state.sizeGrid}/>
        <button onClick={this.leftHandler}>LEFT</button>
        <button onClick={this.upHandler}>UP</button>
        <button onClick={this.downHandler}>DOWN</button>
        <button onClick={this.rigthHandler}>RIGHT</button>
      </div>
    );
  }
}

export default App;

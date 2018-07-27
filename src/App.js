import React, { Component } from 'react';
import './App.css';

import Grid from './component/Grid/Grid.js'
import Hoover from './component/Hoover/Hoover.js'

class App extends Component {
  state= {
    sizeGrid: 0,
    x: 0,
    y: 0,
    dirtyX: 0,
    dirtyY: 1
  }


initialXHandler = (event) => {
  this.setState( {
    x: event.target.value
  });
}
initialYHandler = (event) => {
  this.setState( {
    y: event.target.value
  });
}
  sizeGridHandler = () => {
    this.setState( {
      sizeGrid: this.state.sizeGrid + 1
    });
  }
  incraseXHandler = () => {
    this.setState( {
      x: this.state.x + 1
    });
    console.log('this.state.x ', this.state.x)
  }
  decraseXHandler = () => {
    let left = this.state.x - 1
    this.setState( {

      x: left
    });
  }
  incraseYHandler = () => {
    let up = this.state.y + 1
    this.setState( {
      y: up
    });
    console.log('this.state.y ', this.state.y)
  }
  decraseYHandler = () => {
    this.setState( {
      y: this.state.y - 1
    });
  }

  updatedX = () =>{
    return this.state.x
  }

  updatedY = () =>{
    return this.state.y
  }
  dirtyX = () =>{
    return this.dirtyX
  }

  dirtyY = () =>{
    return this.dirtyY
  }
  render() {
    return (
      <div className="App">
        <h1>Hoover</h1>
        <p>Position: {this.state.x}, {this.state.y}</p>
        <button onClick = {this.sizeGridHandler} >
          Grid Size: {this.state.sizeGrid}x{this.state.sizeGrid}
        </button>
        < Grid
          sizeGrid ={this.state.sizeGrid}
          updatedX = {this.state.x}
          updatedY = {this.state.y}
          dirtyX = {this.state.dirtyX}
          dirtyY = {this.state.dirtyY}
        />
        < Hoover
          sizeGrid ={this.state.sizeGrid}
          updatedX = {this.state.x}
          updatedY = {this.state.y}
          incraseX = {this.incraseXHandler}
          decraseX = {this.decraseXHandler}
          incraseY = {this.incraseYHandler}
          decraseY = {this.decraseYHandler}
        />
      </div>
    );
  }
}

export default App;

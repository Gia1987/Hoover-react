import React, { Component } from 'react';
import './App.css';

import Grid from './component/Grid/Grid.js'
import Hoover from './component/Hoover/Hoover.js'

class App extends Component {
  state= {
    sizeGrid: 0,
    x: null,
    y: null
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
  }
  decraseXHandler = () => {
    this.setState( {
      x: this.state.x - 1
    });
  }
  incraseYHandler = () => {
    this.setState( {
      y: this.state.y + 1
    });
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
  render() {
    return (
      <div className="App">
        <h1>Hoover</h1>
        <p>Position: {this.state.x}, {this.state.y}</p>
        <input type="number" placeholder='Inital X' onChange= {this.initialXHandler.bind(this)}/>
        <input type="number" placeholder='Inital Y' onChange= {this.initialYHandler.bind(this)}/>
        <button onClick = {this.sizeGridHandler} >
          Grid Size: {this.state.sizeGrid}x{this.state.sizeGrid}
        </button>
        < Grid
          sizeGrid ={this.state.sizeGrid}
          updatedX = {this.state.x}
          updatedY = {this.state.y}
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

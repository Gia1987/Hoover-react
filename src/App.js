import React, { Component } from 'react';
import './App.css';

import Grid from './component/Grid/Grid.js'
import Hoover from './component/Hoover/Hoover.js'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        GridX: null,
        GridY: null,
        x: null,
        y: null,
      };
    }

initialXYHandler = (event) => {
  event.preventDefault();
  const initialX = event.target.x.value;
  const initialY = event.target.y.value;
  this.setState( {
    x: parseInt(initialX),
    y: parseInt(initialY)
  });
  console.log(this.state.x)
}

sizeGridXYHandler = (event) => {
  event.preventDefault();
  const initialX = event.target.GridX.value;
  const initialY = event.target.GridY.value;
  this.setState( {
    GridX: parseInt(initialX),
    GridY: parseInt(initialY)
  });
  console.log(this.state.GridX)
}


  incraseXHandler = () => {
    this.setState( {
      x: this.state.x += 1
    });
  }

  decraseXHandler = () => {
    this.setState( {
      x: this.state.x -= 1
    });
  }
  incraseYHandler = () => {
    this.setState( {
      y: this.state.y += 1
    });
  }

  decraseYHandler = () => {
    this.setState( {
      y: this.state.y -= 1
    });
  }

  // updatedX = () => {
  //   return this.state.x
  // }
  //
  // updatedY = () => {
  //   return this.state.y
  // }

  render() {
    return (
      <div className="App">
        <h1>Hoover</h1>
        <p>Position: {this.state.x}, {this.state.y}</p>
        <p>{this.state.sizeGridX}</p>
        < Grid
          sizeGrid ={this.sizeGridXYHandler}
          sizeGridX = {this.state.GridX}
          sizeGridY = {this.state.GridY}
          updatedX = {this.state.x}
          updatedY = {this.state.y}
          patches = {this.state.dirtyPatches}
          clean ={this.cleanHandler}
        />
        < Hoover
          initialPosition = {this.initialXYHandler}
          sizeGridX = {this.state.GridX}
          sizeGridY = {this.state.GridY}
          updatedX = {this.state.x}
          updatedY = {this.state.y}
          incraseX = {this.incraseXHandler}
          decraseX = {this.decraseXHandler}
          incraseY = {this.incraseYHandler}
          decraseY = {this.decraseYHandler}
          clean ={this.cleanHandler}
        />
      </div>
    );
  }
}

export default App;

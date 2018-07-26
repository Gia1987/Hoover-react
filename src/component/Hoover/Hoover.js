import React, { Component } from 'react';

class Hoover extends Component {

  rigth = () => {
    if(this.props.updatedX < (this.props.sizeGrid - 1)){
      this.props.incraseX()
    }
  }
  left = () => {
    if(this.props.updatedX > 0){
      this.props.decraseX()
    }
  }
  up = () => {
    if(this.props.updatedY < this.props.sizeGrid - 1){
      this.props.incraseY()
    }
  }
  down = () => {
    if(this.props.updatedY > 0){
      this.props.decraseY()
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.left}>LEFT</button>
        <button onClick={this.up}>UP</button>
        <button onClick={this.down}>DOWN</button>
        <button onClick={this.rigth}>RIGHT</button>
      </div>
    );
  }
}
export default Hoover;

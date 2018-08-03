import React, { Component } from 'react';

class Hoover extends Component {

  // clean = () => {
  //   if(this.grid[this.y][this.x] === 'D'){
  //     this.dirtyHoovered += 1
  //     this.grid[this.y][this.x] = ''
  //   }else{
  //     this.grid[this.y][this.x] = ''
  //   }
  // }

  rigth = () => {
    if(this.props.updatedX < (this.props.sizeGridX - 1)){
      this.props.clean
      this.props.incraseX()
    }
  }
  left = () => {
    if(this.props.updatedX > 0){
      this.props.decraseX()
    }
  }
  up = () => {
    if(this.props.updatedY < this.props.sizeGridY - 1){
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
        <form onSubmit ={this.props.initialPosition}>
          <input type='number' name='x' placeholder='X'></input>
          <input type='number' name='y' placeholder='Y'></input>
          <button>Initilal Hoover Position</button>
        </form>
        <button onClick={this.left}>LEFT</button>
        <button onClick={this.up}>UP</button>
        <button onClick={this.down}>DOWN</button>
        <button onClick={this.rigth}>RIGHT</button>
      </div>
    );
  }
}
export default Hoover;

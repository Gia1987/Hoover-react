import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.sizeGrid; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < this.props.sizeGrid; j++) {
        children.push(<td className= {`${j}`}></td>)
      }
      //Create the parent and add the children
      table.push(<tr id={`${i}`}>{children}</tr>)
    }
    return table
  }
  render() {
  return (
    <div>
      <table>
        {this.createTable()}
      </table>
    </div>
  );
 }
}

export default Grid;

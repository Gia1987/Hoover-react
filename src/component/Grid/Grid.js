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
        children.push(<td key ={`${j}`}>
          {(this.props.updatedX == j) && (this.props.updatedY == i ) ?
          <img
            src='https://target.scene7.com/is/image/Target/52731060_Alt01?wid=488&hei=488&fmt=pjpeg'
            width="100" height="100"
          />
          :
          <img
            src='https://thumbs.dreamstime.com/t/slime-blot-isolated-white-background-green-vector-illustration-82581688.jpg'
            width="100" height="100"
            style={(this.props.dirtyX == j) && (this.props.dirtyY == i ) ? {visibility: 'visible'} : {visibility: 'hidden'}}
          />
          }
          </td>)
      }
      //Create the parent and add the children
      table.push(<tr key ={`${i}`}>{children}</tr>)
    }
    return table.reverse()
  }

  render() {
  return (
    <div>
      <table>
        <tbody>
          {this.createTable()}
        </tbody>
      </table>
    </div>
  );
 }
}

export default Grid;

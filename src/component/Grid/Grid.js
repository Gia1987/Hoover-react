import React, { Component } from 'react';

class Grid extends Component {

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.sizeGridY; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < this.props.sizeGridX; j++) {
        children.push(
          <td className={`${j}`}>
            {this.hooverImg(j, i)}
          </td>
        )
      }
      //Create the parent and add the children
      table.push(<tr id={`${i}`}>{children}</tr>)
    }
    return table.reverse()
  }

  // dirtyPatches = () => {
  //   // if(( 0 === j) && ( 0 === i)) {
  //     return <img
  //       src='https://thumbs.dreamstime.com/t/slime-blot-isolated-white-background-green-vector-illustration-82581688.jpg'
  //       width="70" height="70"/>
  //   // }
  // }
  hooverImg = (j, i) => {
    if((this.props.updatedX === j) && (this.props.updatedY === i ) ) {
      // this.props.clean()
      return <img
        src='https://target.scene7.com/is/image/Target/52731060_Alt01?wid=488&hei=488&fmt=pjpeg'
        width="70" height="70"/>
    }
  }

  render() {
  return (
    <div>
      <form onSubmit ={this.props.sizeGrid}>
        <input type='number' name='GridX' placeholder='X'></input>
        <input type='number' name='GridY' placeholder='Y'></input>
        <button>Get Grid</button>
      </form>
      <table className='myTable'>
        <tbody>
          {this.createTable()}
        </tbody>
      </table>
    </div>
  );
 }
}

export default Grid;

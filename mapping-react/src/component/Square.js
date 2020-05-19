import React, { Component } from 'react';
import '../App.css';

const tiles =['','0','X'];
export default class Square extends Component {
  state ={
    currentBoard:0
  }
  handleClick(){
    this.setState(prevState=>{
      return{
        currentBoard:(prevState.currentBoard + 4)%3
      }
    })
  }
  render(){
    return <div className='squareComponent'
              onClick={this.handleClick.bind(this)}>{this.state.currentBoard}
            </div>
  }
}
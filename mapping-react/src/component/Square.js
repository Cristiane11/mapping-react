import React, { Component } from 'react';



export default class Square extends Component {
  render(){
    return <div className='squareComponent' onClick={this.props.handleClick}>{this.props.value}</div>
  }
}
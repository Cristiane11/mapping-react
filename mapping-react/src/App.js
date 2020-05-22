import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CatCard from './component/CatCard';
import Square from './component/Square';


class App extends Component {
  state={
    count:1,
    board:["","","",
            "","","",
            "","",""],
    turn:'X'
    
  }
  
  playerWon(){
    const board = this.state.board
  }

   updateBoard(i){
     let board = this.state.board.slice();
     let turn = this.state.turn;
     if (board[i]==""){
       board[i]= turn;
       turn = turn === '0'?'X':'0';
     }
     this.setState({
       board,
       turn,
     })

   }
  incrementCount(){
  this.setState((anterior)=>{
   return{ 
   count:anterior.count + 5
   }
})
  }
  decrementCount(){
    this.setState((prevState)=>{
     return{ 
     count:prevState.count - 1
     }
  })
    }
  
  render(){
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CatCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
     
  <p>Count: {this.state.count}</p>
  <button onClick={this.incrementCount.bind(this)}>+</button>
  <button onClick={this.decrementCount.bind(this)}>-</button>
    <hr/>
    <div>
      <Square/><Square/><Square/>
    </div>
    <div>
      <Square/><Square/><Square/>
    </div>
    <div>
      <Square/><Square/><Square/>
    </div>
    
    </div>
  );
}
}

export default App;

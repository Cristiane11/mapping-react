import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CatCard from './component/CatCard';


class App extends Component {
  state={
    count:1
  }
  
  render(){
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CatCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
     
  <p>Count: {this.state.count}</p>
    </div>
  );
}
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatCard from './component/CatCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CatCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
    </div>
  );
}

export default App;

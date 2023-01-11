import React from 'react';
import './App.css';
import Blog from './Blog';
import Cards from './Cards';
import Sponsor from './Sponsor';
import logo from './logo.png';

function App() {

  return (
    <div className='app'>
      <div className='container'>
        <div className='header-container'>
          <div className='title'>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>sonolibero.io</h1>
          </div>
          <div className='main'>
            <Blog />
            <Cards />
          </div>
            <Sponsor />
        </div>
        <div className='footer-container'>
        </div>
      </div>
    </div>
  );
}

export default App;

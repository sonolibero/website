import React from 'react';
import './App.css';
import Blog from './Blog';
import Cards from './Cards';
import Sponsor from './Sponsor';
import logo from './logo.png';
import twitterLogo from './utils/twitter.svg';

function App() {
  const TWITTER_HANDLE = 'verci_eth';
  const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

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
          <a href={TWITTER_LINK} target="_blank" rel="noreferrer">
            <img alt="Twitter Logo" className="logo" src={twitterLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

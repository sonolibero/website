import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Blog from './Blog';
import Cards from './Cards';
import Sponsor from './Sponsor';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <Blog />
        <Cards />
      </body>
      <footer>
        <Sponsor />
        <a href="https://twitter.com/verci_eth?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">follow @verci_eth</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </footer>
    </div>
  );
}

export default App;

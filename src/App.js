import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav><Navbar /></nav>
        <body><Card /></body>
      </header>
    </div>
  );
}

export default App;

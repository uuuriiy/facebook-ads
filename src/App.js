import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactPixel from 'react-facebook-pixel';

// demo
// ID
// 527637292825855


function App() {
  useEffect(() => {
    ReactPixel.init('527637292825855');
    ReactPixel.track('ViewContent', {
      content_name: 'Product Name',
      content_category: 'Product Category'
    });
    console.log(ReactPixel.track('ViewContent', {
      content_name: 'Product Name',
      content_category: 'Product Category'
    }));
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

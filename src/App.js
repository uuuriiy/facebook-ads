import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

// demo
// ID
// 527637292825855

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async() => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('527637292825855', null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <button>Hello</button>.
      </header>
    </div>
  );
}

export default App;

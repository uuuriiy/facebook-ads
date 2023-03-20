import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactPixel from 'react-facebook-pixel';

// demo
// ID
// 527637292825855
ReactPixel.init('527637292825855');

function App() {
  useEffect(() => {
  ReactPixel.init('527637292825855');
    ReactPixel.track('ViewContent', {
      content_name: 'Product Name',
      content_category: 'Product Category'
    });
    ReactPixel.pageView(); // For tracking page view
  // ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
  // ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
  // ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
  //   eactPixel.trackSingleCustom('PixelId', event, data); // For tracking 
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

import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import ReactPixel from 'react-facebook-pixel';

// demo
// ID
// 527637292825855

const advancedMatching = { em: 'ihnatchukud.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};

function App() {
  useEffect(() => {
  ReactPixel.init('527637292825855', advancedMatching, options);
    ReactPixel.track('ViewContent', {
      content_name: 'Facebook ads',
      content_category: 'Ads'
    });
    ReactPixel.pageView(); // For tracking page view
    ReactPixel.revokeConsent();
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
      <button onClick={ReactPixel.grantConsent}>Accept cookies</button>.
      </header>
    </div>
  );
}

export default App;

import { useEffect } from 'react'
import './App.css';

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async() => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init('577428994447337', {
      em: 'email@email.com',         //Values will be hashed automatically by the pixel using SHA-256
      fn: 'first_name',    
      ln: 'last_name',
      country: 'country'
    }, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent")
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
      <button>Event</button>.
      </header>
    </div>
  );
}

export default App;

import { useEffect } from 'react'
import './App.css';

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async() => {
    // const { default: ReactPixel } = await import('react-facebook-pixel');
    // ReactPixel.init('1273202096933750', null, {
    //     autoConfig: true,
    //     debug: true,
    //   });
    // ReactPixel.pageView();
    // ReactPixel.track("ViewContent")
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

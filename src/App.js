import './App.css';
import React, { useState, createContext } from 'react';
import Photo from './components/photo';
import OG from './assets/OG.png'
import BG from './assets/BG.png'

export const AppContext = createContext();

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <AppContext.Provider value={{ display }}>
      <div className="App">
        {/* <div 
        className="overlay-content" 
        style={{  
          background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.4)",
          display: display ? 'none' : 'flex'
        }}> 
          <img src={OG} style={{width: '720px', height: '520px'}}></img>
        </div>

        <div 
        className="overlay-content" 
        style={{  
          background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
          // opacity: display ? 0 : 1,
          display: display ? 'none' : 'flex',
          color: "white",
          fontWeight: 700
        }}> 
          When I say Ai, I feel <button onClick={() => setDisplay(true)}>here</button>
        </div> */}
        <Photo />
        {/* <div 
        className="bg-content" 
        style={{  
          background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
          // opacity: display ? 0 : 1,
          // display: display ? 'none' : 'flex',
          color: "white",
          fontWeight: 700
        }}> 
          <img src={BG} style={{width: '100vw', height: '100vh'}}></img>
        </div> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;

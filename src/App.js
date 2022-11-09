import './App.css';
import React, { useState, createContext } from 'react';
import Photo from './components/photo';

export const AppContext = createContext();

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <AppContext.Provider value={{ display }}>
      <div className="App">
        <div 
        className="overlay-content" 
        style={{  
          background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.5)",
          // opacity: display ? 0 : 1,
          display: display ? 'none' : 'inline'
        }}> 
          When I say Ai, I feel <button onClick={() => setDisplay(true)}>here</button>
        </div>
        <Photo />
      </div>
    </AppContext.Provider>
  );
}

export default App;

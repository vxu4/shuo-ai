import './App.css';
import React, { useState, createContext } from 'react';
import Photo from './components/photo';
import "98.css";

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
          <img src={process.env.PUBLIC_URL + '/OG.png'} style={{ width: '720px', height: '520px' }}></img>
        </div> */}
        <div style={{ width: 300 }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">WIndowtest</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>Text</p>
            <div className="field-row" style={{ justifyContent: "center" }}>
              <button onClick={() => console.log('click')}>+</button>
            </div>
          </div>
        </div>

        {/* <div 
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
        <div style={{ width: 'auto' }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">Memory Error: </div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <div>
            <Photo />
            {/* 
            TODO: figure out how the overlay sizing should work
            <div
              className="bg-content"
              style={{
                background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
                // opacity: display ? 0 : 1,
                // display: display ? 'none' : 'flex',
                color: "white",
                fontWeight: 700
              }}>
              <img src={process.env.PUBLIC_URL + '/BG.png'} style={{ width: '100%', height: 'auto' }}></img>
            </div> */}
            </div>
          </div>
        </div>

      </div>
    </AppContext.Provider>
  );
}

export default App;

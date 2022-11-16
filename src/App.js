import React, { useState, createContext } from 'react';
import Photo from './components/photo';
import './App.css';
import "98.css";

export const AppContext = createContext();

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <AppContext.Provider value={{ display }}>
      <div className="App">
        <div
          className="overlay-content"
          style={{
            background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.4)",
            display: display ? 'none' : 'flex'
          }}>
          <img src={process.env.PUBLIC_URL + '/OG.png'} style={{ width: '570px', height: '400px' }}></img>
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
          <div style={{ width: 300 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">Memory Load Incomplete: </div>
              {/* <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div> */}
            </div>

            <div className="window-body">
              <p style={{ textAlign: "center" }}>Could not remember how to write your love, but when I say ai, I feel </p>
              <div className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ cursor: "pointer" }} onClick={() => setDisplay(true)}>here</button>
              </div>
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
            <div className="title-bar-text">{display ? 'Transmission: Do you remember the strokes I taught you? Start at the top right corner. Hover. Go - write love into lost pixels. But don`t forget, listen to the presence within' : 'IMG_33-2x'}</div>
            <div className="title-bar-controls" style={{margin: '0px'}}>
              {/* <button aria-label="Minimize">minutae</button>
              <button aria-label="Maximize"> detailed </button> */}
              <button aria-label="Close" style={{margin: '0px', paddingLeft: '15px', paddingRight: '5px', paddingBottom: '2px'}}> remembrance </button>
            </div>
          </div>

          <div className="window-body">
            <div className="bg-image hi" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/BG.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>

              <Photo />
              {/* TODO: figure out how the overlay sizing should work */}
              {/* <div
                className="bg-content"
                style={{
                  background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0)",
                  // opacity: display ? 0 : 1,
                  // display: display ? 'none' : 'flex',
                  color: "white",
                  fontWeight: 700
                }}>
                <img src={process.env.PUBLIC_URL + '/BG.png'} style={{ width: '1350px', height: 'auto' }}></img>
            </div> */}
            </div>
          </div>
        </div>

      </div>
    </AppContext.Provider>
  );
}

export default App;

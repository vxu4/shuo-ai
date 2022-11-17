import React, { useState, createContext } from 'react';
import Photo from './components/photo';
import './App.css';
import "98.css";

export const AppContext = createContext();

function App() {
  const [display, setDisplay] = useState(false);
  const [remember, setRemember] = useState(false);
  const transmission = () => {
    if (remember) {
      return ('What is found and left in the tracing?')
    }
    else if (display) {
      return ('Transmission: Do you remember the strokes I taught you? Start at the top right corner. Hover. Go - write love into lost pixels. But don`t forget, listen to the presence within')
    } else {
      return ('IMG_33-2x')
    }
  }

  return (
    <AppContext.Provider value={{ display, remember }}>
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
            display: display ? 'none' : 'flex',
            color: "white",
            fontWeight: 700
          }}>
          <div style={{ width: 300 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">Memory Load Incomplete: </div>
            </div>

            <div className="window-body">
              <p style={{ textAlign: "center" }}>Could not remember how to write your love, but when I say ai, I feel </p>
              <div className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ cursor: "pointer" }} onClick={() => setDisplay(true)}>here</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 'auto' }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">{transmission()}</div>
            <div className="title-bar-controls" style={{ margin: '0px' }}>
              {
                display && !remember &&
                <button
                  aria-label="Close"
                  onClick={() => setRemember(true)}
                  style={{ cursor: 'pointer', margin: '0px', paddingLeft: '15px', paddingRight: '5px', paddingBottom: '2px' }}>
                  remembrance
                </button>
              }
              {
                remember &&
                <button
                  // aria-label="Close"
                  onClick={() => { setRemember(false); setDisplay(false) }}
                  style={{ cursor: 'pointer', margin: '0px', paddingLeft: '15px', paddingRight: '5px', paddingBottom: '2px' }}>
                  repeat
                </button>
              }
            </div>
          </div>
          <div className="window-body">
            <div className="bg-image" style={{ position: 'relative', backgroundImage: remember ? `url(${process.env.PUBLIC_URL + '/water_02.png'})` : `url(${process.env.PUBLIC_URL + '/BG.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              {remember &&
                <div className="home">
                  <video
                    autoPlay
                    muted
                    loop
                    style={{ backgroundColor: "#FFFFFF", width: "100%", objectFit: "cover", height: "100%", margin: 0, padding: 0 }}
                  >
                    <source src={process.env.PUBLIC_URL + '/water_11.mp4'} type="video/mp4" />
                  </video>
                </div>
              }
              <Photo />
            </div>
          </div>
        </div>

      </div>
    </AppContext.Provider >
  );
}

export default App;

import React, { useState, createContext } from 'react';
import Photo from './components/photo';
import './App.css';
import "98.css";
import Message from './components/messages';
import Reminders from './components/reminders';
import Teachings from './components/teachings';

export const AppContext = createContext();

function App() {
  const [matches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  const [display, setDisplay] = useState(false);
  const [remember, setRemember] = useState(false);
  const transmission = () => {
    // if (remember) {
    //   return ('What is found and left in the tracing?')
    // }
    // else if (display) {
    //   return ('Transmission: Do you remember the strokes I taught you? Start at the top right corner. Hover. Go - write love into lost pixels. But don`t forget, listen to the presence within')
    // } else {
      return ('IMG_33+23')
    // }
  }
  return (
    <AppContext.Provider value={{ display, remember }}>
      <div className="App">
        { !matches 
        ? 
        <div style={{ width: 'auto' }} className="window">
        <div className="title-bar">
          <div className="title-bar-text"></div>
        </div>
        <div className="window-body" style={{padding: "0px 5px"}}>
          Please enter <strong><em>Writing Practice: Wo I Ni </em></strong> <br/> via PC window. See video below: <br/>
          <div className="field-row" style={{ justifyContent: "center", padding: '10px 0px 3px' }}>
            <button style={{ cursor: "pointer" }} onClick={() => window.open("https://vimeo.com/772548080")}>Prerecorded practice </button>
        </div>
        </div>
      </div>
        :
        <>
          <div
            className="overlay-content"
            style={{
              background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.4)",
              display: display ? 'none' : 'flex',
            }}>
            <img alt="family eating dinner" src={process.env.PUBLIC_URL + '/OG.png'} 
            style={{padding: '18px 8px 0px 0px ', width: '560px', height: '400px' }}></img>
          </div>
          
          <Message onClick={() => setDisplay(true)}></Message> 
          <Reminders onClick={() => setRemember(true)}></Reminders> 
          <Teachings onClick={() => {setDisplay(false); setRemember(false)}}></Teachings> 

          <div style={{ width: 'auto' }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">{transmission()}</div>
            </div>
            <div className="window-body">
              <div className="bg-image" style={{ position: 'relative', backgroundImage: remember ? `url(${process.env.PUBLIC_URL + '/water_02.png'})` : `url(${process.env.PUBLIC_URL + '/BG.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                {remember &&
                  <div className="home">
                    
                    <video
                      autoPlay
                      
                      loop
                      // onMouseEnter={() => unmute(videoEl)}
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
        </>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;

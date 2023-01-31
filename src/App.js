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
      <div className="App" style={{position: 'relative'}}>
        { !matches 
        ? 
        //ENTRY TEXT//
        <div style={{ width: 'auto' }} className="window">
          <div className="title-bar">
            <div className="title-bar-text"></div>
          </div>
          <div className="window-body" style={{padding: "0px 5px"}}>
            Please enter <strong><em>Writing Practice: Wo I Ni </em></strong> <br/> via PC window. See video below: <br/>
            <div className="field-row" style={{ justifyContent: "center", padding: '10px 0px 3px' }}>
              <button style={{ cursor: "pointer" }} onClick={() => window.open("https://vimeo.com/772548080")}>Prerecorded practice </button>
              {/* <iframe src="https://player.vimeo.com/video/772548080?h=dda666667e" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
          </div>
          </div>
        </div>
        :
        <>
          {/* <div >
            <img style={{width: '100%'}} src={process.env.PUBLIC_URL + '/BG-BLUE-TABLECLOTH.png'} ></img>
          </div> */}

          {/* OVERLAY OF FAM EATING */}
          <div
            className="overlay-content"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              // background: display ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.4)",
              display: display ? 'none' : 'flex',
            }}>
            <img alt="family eating dinner" src={process.env.PUBLIC_URL + '/OG.png'} 
            style={{padding: '18px 8px 0px 0px ', width: '560px', height: '380px' }}></img>
          </div>
          
          <Message onClick={() => setDisplay(true)}></Message> 
          <Reminders onClick={() => setRemember(true)}></Reminders> 
          <Teachings onClick={() => {setDisplay(false); setRemember(false)}}></Teachings> 

          {/* <div style={{ width: '100%', height: '100%' }} className="window"> */}
            {/* <div className="title-bar">
              <div className="title-bar-text">{transmission()}</div>
            </div> */}
            {/* <div className="window-body" > */}
          <div className="bg-image" 
            // style={{ width: '100%', height: '100%', position: 'relative', backgroundImage: remember ? `url(${process.env.PUBLIC_URL + '/water_02.png'})` : `url(${process.env.PUBLIC_URL + '/BG-BLUE-TABLECLOTH.png'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
            style={{
            position: 'absolute',
          
          }}
            >
              {remember &&
              //WATER VIDEO
                <div className="home">
                  <video
                    autoPlay
                    loop
                    width="560px"
                    height="380px"
                    // onMouseEnter={() => unmute(videoEl)}
                    style={{ width: '570px', height: '400px', opacity: '53%', backgroundColor: "#FFFFFF",objectFit: "cover", margin: "-2px", padding: 0 }}
                  >
                    <source src={process.env.PUBLIC_URL + '/water_11.mp4'} type="video/mp4" />
                  </video>
                </div>
              }
              {display && <Photo />}
            </div>
            {/* </div> */}
          {/* </div> */}
        </>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;

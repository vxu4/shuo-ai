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

  return (
    <AppContext.Provider value={{ display, remember }}>
      <div className="App" style={{position: 'relative'}}>
          {/* OVERLAY OF FAM EATING */}
          { matches ?
            <div
              className="overlay-content"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                display: display ? 'none' : 'flex',
              }}>
              <img alt="family eating dinner" src={process.env.PUBLIC_URL + '/OG.png'} 
              style={{padding: '18px 8px 0px 0px ', width: '560px', height: '380px' }}></img>
            </div>
            : 
            <div className="window-body" style={{marginTop: "-50px"}}>
              Please enter <strong><em>Writing Practice: Wo I Ni </em></strong> <br/> via PC window. See prerecorded practice below: <br/>
              <div className="field-row" style={{ justifyContent: "center", padding: '10px 0px 3px' }}>
                <button style={{ cursor: "pointer", background: "transparent", boxShadow: "none" }} onClick={() => window.open("https://vimeo.com/794721024")}>
                  <img
                    alt="here"
                    style={{
                      width: "23%",
                      top: "48%",
                      left: "38%",
                      position: "absolute",
                    }}
                    src={process.env.PUBLIC_URL + "/HERE-02.png"}
                  ></img>
                </button>
              </div>
            </div>
          }
          
          {matches && 
          <>
          <Message onClick={() => setDisplay(true)}></Message> 
          <Reminders onClick={() => setRemember(true)}></Reminders> 
          <Teachings onClick={() => {setDisplay(false); setRemember(false)}}></Teachings> 

          <div className="bg-image" 
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
                    style={{ width: '570px', height: '400px', opacity: '53%', backgroundColor: "#FFFFFF",objectFit: "cover", margin: "-2px", padding: 0 }}
                  >
                    <source src={process.env.PUBLIC_URL + '/water_11.mp4'} type="video/mp4" />
                  </video>
                </div>
              }
              {display && <Photo />}
          </div>
          </>
          }
      </div>
    </AppContext.Provider>
  );
}

export default App;

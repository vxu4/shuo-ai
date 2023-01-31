import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";
{
  /* "Water remembers everything it travels <br/>over and through. <br/>
                        If you have been in water, <br/>part of you remains there still." <br/>
                        -Natalie Diaz <br/><br/> */
}

const Water = ({ onClick }) => {
  const { remember } = useContext(AppContext);
  if (remember) {
    return (
      <div
        className="transmission"
        style={{
          background: "rgba(255, 255, 255, 0)",
          fontWeight: 700,
          // bottom: 0,
          // right: 0
        }}
      >
        {/* <div style={{ width: 300, marginRight: '3vw', marginBottom: '9vh' }} className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Transmissions: </div>
                    </div>
                    <div className="window-body" style={{textAlign: 'right'}}>
                      
                        How much capacity for love water must have, <br/> 
                        to carry generations in its memory. <br/><br/>
                        What love teachings can the water <br/>
                        carry back to us? <br/><br/>
                        {
                        onClick &&
                            <div className="field-row" style={{ justifyContent: "right", padding: '10px 0px 5px'}}>
                                <button style={{ cursor: "pointer" }} onClick={onClick}>repeat</button>
                            </div>
                        }
                    </div>
                </div> */}
        {onClick && (
          <button
            style={{
              cursor: "pointer",
              background: "transparent",
              boxShadow: "none",
            }}
            onClick={onClick}
          >
            <img
              style={{
                width: "555%",
                position: "absolute",
                top: "470%",
                left: "170%",
              }}
              src={process.env.PUBLIC_URL + "/TRANSMISSION-MESSAGE-03.png"}
            ></img>
          </button>
        )}
      </div>
    );
  }
};

const Teachings = ({ onClick }) => {
  return <Water onClick={onClick} />;
};

export default Teachings;

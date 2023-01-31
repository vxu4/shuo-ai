import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";

const Reminder = ({ onClick }) => {
  const { display } = useContext(AppContext);
  if (!display) {
    return (
      <div
        className="overlay-content"
        style={{
          background: display
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0)",
          fontWeight: 700,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* <div style={{ width: 300 }} className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Memory Load Incomplete: </div>
                    </div>
                    <div className="window-body">
                    <p style={{ textAlign: "center" }}>
                    Could not remember how to write your love, but when I say ai, I feel            
                    </p>
                    {
                    onClick &&
                        <div className="field-row" style={{ justifyContent: "center" }}>
                            <button style={{ cursor: "pointer" }} onClick={onClick}>here</button>
                        </div>
                    }
                    </div>
                </div> */}
        <img
          style={{
            width: "33%",
            top: "27%",
            left: "33%",
            position: "absolute",
          }}
          src={process.env.PUBLIC_URL + "/OPENING-02.png"}
        ></img>
        {onClick && (
          <button
            style={{ cursor: "pointer", color: "transparent" }}
            onClick={onClick}
          >
            <img
              style={{
                width: "23%",
                top: "38%",
                left: "38%",
                position: "absolute",
              }}
              src={process.env.PUBLIC_URL + "/HERE-02.png"}
            ></img>
          </button>
        )}
      </div>
    );
  }
};

const Messages = ({ onClick }) => {
  return <Reminder onClick={onClick} />;
};

export default Messages;

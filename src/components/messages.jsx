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
        <img
          alt="Opening note, admitting I couldn't remember how to write ai, love. But when I say ai, I feel"
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
            style={{
              cursor: "pointer",
              background: "transparent",
              boxShadow: "none",
            }}
            onClick={onClick}
          >
            <img
              alt="here"
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

import React, { useContext } from "react";
import { AppContext } from "../App";
import "../App.css";
import "98.css";

const Teaching = ({ onClick }) => {
  const { display, remember } = useContext(AppContext);
  if (display && !remember) {
    return (
      <div
        className="transmission"
        style={{
          background: "rgba(255, 255, 255, 0)",
          justifyContent: "left",
          alignItems: "flex-start",
          fontWeight: 700,
          top: 0,
          left: 0,
        }}
      >
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
              alt="Reminder note, reminding you gently how to write the word ai, love. And asking you to remember."
              style={{
                width: "333%",
                top: "433%",
                left: "73%",
                position: "absolute",
              }}
              src={process.env.PUBLIC_URL + "/REMINDER-NOTE-02.png"}
            ></img>
          </button>
        )}
      </div>
    );
  }
};

const Reminders = ({ onClick }) => {
  return <Teaching onClick={onClick} />;
};

export default Reminders;

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
              alt="Transmission message asking, what teachings on love can water carry back to us? From the time seen in its waves."
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

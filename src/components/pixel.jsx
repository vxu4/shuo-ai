import React, { useContext } from "react";
import { AppContext } from "../App";

const Pixel = ({ color }) => {
  const { remember } = useContext(AppContext);
  return (
    <div
      style={{
        backgroundColor: remember ? "rgba(0,0,0,0)" : color,
        opacity: "70%",
        width: "10px",
        height: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "10px",
          height: "10px",
          position: "absolute",
          opacity: "3%",
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
};

export default Pixel;

import React, { useRef, useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const Transmission = ({ src }) => {
  const videoEl = useRef(null);
  const [hover, setHover] = useState(false);
  const { remember } = useContext(AppContext);

  const unmute = (videoEl) => {
    videoEl.current.muted = false;
    attemptPlay();
    setHover(true);
  };

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    videoEl.current.muted = true;
  }, [remember]);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        margin: 0,
        padding: 0,
        height: "10px",
        display: "flex",
        cursor: "pointer",
      }}
    >
      <video
        controls={!hover}
        style={{
          backgroundColor: "#FFFFFF",
          opacity: hover ? 1 : 0.33,
          width: "10px",
          height: "10px",
          margin: 0,
          padding: 0,
        }}
        playsInline
        loop
        muted
        onMouseEnter={() => unmute(videoEl)}
        onMouseOut={() => setHover(false)}
        alt="phrase"
        src={process.env.PUBLIC_URL + src}
        ref={videoEl}
        width="33px"
      ></video>
    </div>
  );
};

export default Transmission;

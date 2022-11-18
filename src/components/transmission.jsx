import React, { useRef, useState } from 'react';

const Transmission = ({ src }) => {
  const videoEl = useRef(null);
  const [hover, setHover] = useState(false);

  const unmute = (videoEl) => {
    videoEl.current.muted = false;
    attemptPlay();
    setHover(true);
  }
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  // useEffect(() => {
  //   attemptPlay();
  // }, [hover]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', margin: 0, padding: 0, height: "10px", display: 'flex', cursor: 'pointer' }}>
      <video
        controls={!hover}
        style={{ backgroundColor: "#FFFFFF", opacity: hover ? 1 : 0.33, width: "10px", height: "10px", margin: 0, padding: 0 }}
        playsInline
        loop
        muted
        onMouseEnter={() => unmute(videoEl)}
        onMouseOut={() => setHover(false)}
        alt="phrase"
        src={process.env.PUBLIC_URL + src}
        ref={videoEl}
        width="33px">
      </video>
      {/* 
      OVERLAY TRIAL
      <div
        style={{
          marginTop: '0px', 
          marginLeft: '-13px',
          // background: display ? 'rgba(6, 56, 82, 0.3)' : 'rgba(255, 255, 255, 1.0)',
          // visibility: display ? 'collapsed' : 'visible',
          zIndex: 10,
          display: display ? 'inline' : 'none',

          width: '13px',
          height: '13px'
        }}
      ></div> */}

    </div>
  );
};

export default Transmission;
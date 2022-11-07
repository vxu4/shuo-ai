import React, {useRef, useState, useEffect} from 'react';

const Transmission = ({src}) => {
    const videoEl = useRef(null);
    const [hover, setHover] = useState(false);

    const attemptPlay = () => {
        videoEl && 
          videoEl.current &&
          videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
          });
      };
    
      useEffect(() => {
        attemptPlay();
      }, [hover]);
    
    return (
      <div style={{ backgroundColor: '#FCF8EC', margin: 0, padding: 0, height: "13px", display: 'flex', cursor: 'pointer'}}>
        <video 
        controls={!hover}
        style={{ opacity: hover ? 1 : 0.33, width: "13px", height: "13px", margin: 0, padding:0 }}
        playsInline
        loop
        muted
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        alt="phrase"
        src={src}
        ref={videoEl}
        width="33px">
        {/* <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos. */}
        {/* <iframe src="https://player.vimeo.com/video/764561239?h=82976a45d6" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
      </video>
      </div>
    );
};

export default Transmission;
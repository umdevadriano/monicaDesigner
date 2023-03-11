import React from 'react';
import tape from './vecteezy_justice-and-law-concept-male-judge-in-a-courtroom-on-wooden_10927073_989.mp4';

const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        width: '100%',
        height: '30rem',
        position: 'absolute',
        objectFit: 'cover',
        zIndex: '-1',
        backgroundImage: 'linear-gradient(to right, #4880EC, #019CAD)',
      }}
    >
      <source src={tape} type="video/mp4" />
    </video>
  );
};

export default Video;

import React from 'react';
import Galaxy from '../assets/Galaxia.mp4';
import Typewriter from 'typewriter-effect';

const Principal = () => {
  return (
    <div>
      <div className="bg home"></div>
      <div className="bg-text container">
        <h1>
          <span className="maquinaEscribir">
            {' '}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Benjamin R_ Calix.')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Front _Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Benjamin R_ Calix.')
                  .start();
              }}
            />{' '}
          </span>
        </h1>
      </div>
      <div className="video-container">
        <video className="video" src={Galaxy} autoPlay loop muted></video>
        <span></span>
      </div>
    </div>
  );
};

export default Principal;

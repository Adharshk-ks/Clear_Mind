import React from 'react';

const Meditation = () => {
  return (
    <div className="Meditation">
      <h2>Guided Meditation</h2>
      <p>Take a deep breath and relax.</p>
      <audio controls>
        <source src="path_to_your_meditation_audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Meditation;

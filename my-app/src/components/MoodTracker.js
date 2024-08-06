import React, { useState } from 'react';

const MoodTracker = () => {
  const [mainEmotion, setMainEmotion] = useState('');
  const [subEmotion, setSubEmotion] = useState('');
  
  const handleMainEmotionChange = (e) => {
    setMainEmotion(e.target.value);
    setSubEmotion('');
  };

  const handleSubEmotionChange = (e) => {
    setSubEmotion(e.target.value);
  };

  const emotions = {
    Happy: ["Joyful", "Proud", "Accepted", "Optimistic", "Intimate", "Peaceful", "Powerful"],
    Sad: ["Lonely", "Vulnerable", "Despair", "Guilty", "Depressed", "Hurt"],
    Angry: ["Hateful", "Humiliated", "Hostile", "Violent", "Frustrated", "Distant", "Critical"],
    Fearful: ["Scared", "Anxious", "Insecure", "Helpless", "Overwhelmed", "Frightened"],
    Disgusted: ["Disapproving", "Disappointed", "Awful", "Avoidance"],
    Surprised: ["Startled", "Confused", "Amazed", "Excited"],
  };

  return (
    <div className="MoodTracker">
      <h2>Mood Tracker</h2>
      <label htmlFor="mainEmotion">Select Main Emotion:</label>
      <select id="mainEmotion" value={mainEmotion} onChange={handleMainEmotionChange}>
        <option value="">--Select Emotion--</option>
        {Object.keys(emotions).map((emotion) => (
          <option key={emotion} value={emotion}>{emotion}</option>
        ))}
      </select>
      
      {mainEmotion && (
        <>
          <label htmlFor="subEmotion">Select Sub Emotion:</label>
          <select id="subEmotion" value={subEmotion} onChange={handleSubEmotionChange}>
            <option value="">--Select Sub Emotion--</option>
            {emotions[mainEmotion].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default MoodTracker;

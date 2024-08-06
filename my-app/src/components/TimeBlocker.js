import React, { useState } from 'react';

const TimeBlocker = () => {
  const [blocks, setBlocks] = useState([]);
  const [block, setBlock] = useState({ start: '', end: '', task: '' });

  const addBlock = () => {
    if (block.start && block.end && block.task) {
      setBlocks([...blocks, block]);
      setBlock({ start: '', end: '', task: '' });
    }
  };

  return (
    <div className="TimeBlocker">
      <h2>Time Blocker</h2>
      <input
        type="time"
        value={block.start}
        onChange={(e) => setBlock({ ...block, start: e.target.value })}
      />
      <input
        type="time"
        value={block.end}
        onChange={(e) => setBlock({ ...block, end: e.target.value })}
      />
      <input
        type="text"
        value={block.task}
        onChange={(e) => setBlock({ ...block, task: e.target.value })}
        placeholder="Task"
      />
      <button onClick={addBlock}>Add Time Block</button>
      <ul>
        {blocks.map((block, index) => (
          <li key={index}>
            {block.start} - {block.end}: {block.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeBlocker;

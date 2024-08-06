import React from 'react';
import MoodTracker from './components/MoodTracker';
import Meditation from './components/Meditation';
import TaskManager from './components/TaskManager';
import TimeBlocker from './components/TimeBlocker';
import Sudoku from './components/Sudoku';


const App = () => {
  return (
    <div className="App">
      <h1>Mental Health and Productivity App</h1>
      <MoodTracker />
      <Meditation />
      <TaskManager />
      <TimeBlocker />
      <Sudoku />
    </div>
  );
};

export default App;

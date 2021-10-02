import React from 'react';
import TaskList from './features/task/TaskList';
import './App.css';
import TaskInput from './features/task/TaskInput';

function App() {
  return (
    <>
      <TaskInput />
      <TaskList />
    </>
  );
}

export default App;

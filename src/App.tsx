import React from 'react';
import TaskList from './features/task/TaskList';
import './App.css';
import TaskInput from './features/task/TaskInput';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </>
  );
}

export default App;

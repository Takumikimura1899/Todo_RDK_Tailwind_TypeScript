import React from 'react';
import TaskList from './components/organisms/TaskList';
import './App.css';
import TaskInput from './components/organisms/TaskInput';
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

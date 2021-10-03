import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';
import TodoForm from '../../components/molecules/TodoForm';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [editContent, setEditContent] = useState('');
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newTask(editContent));
  };
  return (
    <TodoForm
      onSubmit={handleSubmit}
      onChange={handleContentChange}
      value={editContent}
    />
  );
};

export default TaskInput;

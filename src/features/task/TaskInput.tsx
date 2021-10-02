import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newTask } from './taskSlice';

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editContent}
        onChange={handleContentChange}
        placeholder='TODOを入力してください'
      />
      <button>追加</button>
    </form>
  );
};

export default TaskInput;

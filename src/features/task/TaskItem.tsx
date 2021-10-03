import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from './taskSlice';
import { toggleCompleted, deleteTask } from './taskSlice';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className=''>
      <input
        type='checkbox'
        onChange={() => dispatch(toggleCompleted(task))}
        defaultChecked={task.completed}
      />
      <span>{task.content}</span>
      <button onClick={() => dispatch(deleteTask(task))}>削除</button>
    </div>
  );
};

export default TaskItem;

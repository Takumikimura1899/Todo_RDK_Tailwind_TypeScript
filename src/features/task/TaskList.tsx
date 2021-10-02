import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { selectTasks, Task } from './taskSlice';

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;

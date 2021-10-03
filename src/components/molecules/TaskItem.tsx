import React from 'react';
import { useDispatch } from 'react-redux';
import CheckBox from '../atoms/CheckBox';
import DeleteButton from '../atoms/DeleteButton';
import TaskContent from '../atoms/TaskContent';
import { Task } from '../../features/task/taskSlice';
import { toggleCompleted, deleteTask } from '../../features/task/taskSlice';

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  const onChangeCompleted = () => dispatch(toggleCompleted(task));
  const onClickDelete = () => dispatch(deleteTask(task));
  return (
    // <div className=''>
    //   <span>{task.content}</span>
    //   <button onClick={() => dispatch(deleteTask(task))}>削除</button>
    // </div>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-4 mx-auto'>
        <div className='lg w-1/2 flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
          <CheckBox onChange={onChangeCompleted} completed={task.completed} />
          <TaskContent>{task.content}</TaskContent>
          <DeleteButton onClick={onClickDelete} />
        </div>
      </div>
    </section>
  );
};

export default TaskItem;

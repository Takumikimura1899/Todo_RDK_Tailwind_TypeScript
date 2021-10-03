import React from 'react';

const TaskContent: React.FC = ({ children }) => {
  return (
    <h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
      {children}
    </h1>
  );
};

export default TaskContent;

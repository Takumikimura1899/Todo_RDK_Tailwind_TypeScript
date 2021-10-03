import React from 'react';

type Props = {
  onClick: (e: React.MouseEvent) => void;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0'
    >
      削除
    </button>
  );
};

export default DeleteButton;

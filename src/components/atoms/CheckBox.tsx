import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent) => void;
  completed: boolean;
};

const CheckBox: React.FC<Props> = ({ onChange, completed }) => {
  return (
    <input
      className='mx-4'
      type='checkbox'
      onChange={onChange}
      defaultChecked={completed}
    />
  );
};

export default CheckBox;

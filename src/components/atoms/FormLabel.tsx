import React from 'react';

const FormLabel: React.FC = ({ children }) => {
  return (
    <label htmlFor='name' className='text-base leading-7 text-blueGray-500'>
      {children}
    </label>
  );
};

export default FormLabel;

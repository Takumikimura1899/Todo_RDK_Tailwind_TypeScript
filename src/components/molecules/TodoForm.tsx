import React from 'react';
import FormButton from '../atoms/FormButton';
import FormInput from '../atoms/FormInput';
import FormLabel from '../atoms/FormLabel';

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoForm: React.FC<Props> = ({ onSubmit, value, onChange }) => {
  return (
    <section className='text-blueGray-700 '>
      <form action='submit' onSubmit={onSubmit}>
        <div className='container items-center px-5 py-12 lg:px-20'>
          <div className='flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-2/6 md:w-1/2 md:mt-0'>
            <div className='relative mt-4'>
              <FormLabel>Todo</FormLabel>
              <FormInput
                type='text'
                value={value}
                onChange={onChange}
                placeholder='TODOを入力してください'
              />
            </div>
            <FormButton>Button</FormButton>
          </div>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;

import React from 'react';

const Header = () => {
  return (
    <div className='bg-white lg:pb-12'>
      <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <header className='flex justify-between items-center py-4 md:py-8'>
          {/* logo - start */}
          <a
            href='/'
            className='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
            aria-label='logo'
          >
            <svg
              width='95'
              height='94'
              viewBox='0 0 95 94'
              className='w-6 h-auto text-indigo-500'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M96 0V47L48 94H0V47L48 0H96Z' />
            </svg>
            Flowrift
          </a>
          {/* logo - end */}

          {/* nav - start */}
          <nav className='hidden lg:flex gap-12'>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
            >
              Home
            </a>
            <a
              href='#'
              className='inline-flex items-center text-indigo-500 text-lg font-semibold gap-1'
            >
              Features
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-800'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100'
            >
              About
            </a>
          </nav>
          {/* nav - end */}

          {/* buttons - start */}
          <div className='hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8'>
            <a
              href='#'
              className='inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3'
            >
              Sign in
            </a>

            <a
              href='#'
              className='inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
            >
              Sign up
            </a>
          </div>

          <button
            type='button'
            className='inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              />
            </svg>
            Menu
          </button>
          {/* buttons - end */}
        </header>
      </div>
    </div>
  );
};

export default Header;

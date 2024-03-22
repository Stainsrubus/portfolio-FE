import React from 'react';

function SectionTitle({ title }) {
  return (
    <div className='flex gap-10 lg:px-10 sm:px-5 items-center py-20 '>
      <h1 className='text-4xl sm:text-2xl text-light_primary dark:text-dark_primary font-semibold slide-in-left ]'>{title}</h1>
      <div className='w-96 h-[2px] dark:bg-dark_secondary bg-light_secondary slide-in-right'></div>
    </div>
  );
}

export default SectionTitle;

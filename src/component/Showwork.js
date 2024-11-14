import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Showwork = ({ items }) => {
  const [open, setOpen] = useState(false);

  const openbox = () => {
    setOpen(true);
  };

  const closebox = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='w-full h-[300px] bg-oasim shadow-inner shadow-zinc-700 rounded-lg overflow-hidden'>
        <div className='w-full h-[80%]'>
          <img src={items.image} alt='' className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-[20%] flex items-center justify-around'>
          <Link to={items.link}> 
          <button className='px-4 py-2 shadow-inner shadow-zinc-700 bg-zinc-800'>
            Live Preview
          </button>
          </Link>
          <button onClick={openbox} className='px-4 py-2 shadow-inner shadow-zinc-700 bg-zinc-800'>
            View Details
          </button>
        </div>
      </div>

      {open && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <div className='w-11/12 h-11/12 bg-gray-600 p-6 rounded-lg shadow-lg relative'>
            <button
              onClick={closebox}
              className='absolute top-2 right-2 text-gray-300  font-bold text-xl'
            >
              &times;
            </button>
            <div className='w-full h-full'>
              <p className='text-xl font-semibold mb-4'> Project Details</p>
              {/* Add details of the item here */}
              <p> Title: {items.title}</p>
              <p> Language: {items.Lang}</p>
              <p> Dicription: {items.dic}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Showwork;

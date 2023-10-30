'use client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex items-center justify-between">
        <div className="flex-1">
          <Link className='btn btn-ghost text-violet-300' href='/'>Home</Link>
          <Link className='btn btn-ghost text-violet-300' href='/animated-typing'>Animated Typing</Link>
          <Link className='btn btn-ghost text-violet-300' href='/price-slider-modified'>Price Slide</Link>
        </div>

        <div className="flex-1 text-white text-4xl text-center">
          Todo App
        </div>

        <div className="flex-none">
          <Link className='btn btn-primary' href='/create'>Add New Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

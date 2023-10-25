import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
  <div className="navbar ">
    <div className="container">
      <div className="flex-1">
        <Link className='btn btn-ghost text-violet-300' href='/'>Home</Link>
      </div>
      <div className="flex-1 text-white text-4xl">
        Todo App
      </div>
      <div className="flex-none">
        <Link className='btn btn-ghost text-violet-300' href='/create'>Add New Task</Link>
      </div>
    </div>
  </div>
  )
}

export default Navbar
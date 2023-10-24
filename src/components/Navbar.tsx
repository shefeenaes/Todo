import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-l">Home</a>
    </div>
    <div className="navbar-center hidden lg:flex normal-case text-xl">
      Todo App
    </div>
    <div className="navbar-end">
      <a className="btn">Add new Task</a>
    </div>
  </div>
  )
}

export default Navbar
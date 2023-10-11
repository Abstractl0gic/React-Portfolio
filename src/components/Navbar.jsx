import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <div className='navbar'>
    <div className='toggleButton'>
      <button> </button>
    </div>
    <div className='navlinks'>
      <Link to='/'> AboutMe </Link>
      <Link to='/Projects'> Projects </Link>
      <Link to='/Resume'> Resume </Link>
    </div>
  </div>
  )
}

export default Navbar
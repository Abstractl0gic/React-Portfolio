import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
  return (
  <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
    <div className='toggleButton'>
      <button 
        onClick={() => {
          setExpandNavbar((prev) => !prev);
      }}
      >
        <MenuIcon />
      </button>
    </div>
    <div className='navlinks'>
      <Link to='/'> About Me </Link>
      <Link to='/Projects'> Projects </Link>
      <Link to='/Resume'> Resume </Link>
    </div>
  </div>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
  <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
    <div className='toggleButton'>
      <button onClick={() => {setExpandNavbar((prev) => !prev);}}>
        <MenuIcon />
      </button>
    </div>
    <div className='navlinks'>
      <Link to='/'> About</Link>
      <Link to='/Projects'> Projects </Link>
      <Link to='/Resume'> Resume </Link>
    </div>
  </div>
  )
}

export default Navbar
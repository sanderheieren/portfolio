import React, {useState} from 'react'
import './nav.css';


const Nav = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
        <nav id="nav" className= {isActive ? 'active' : null}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="icon" id="toggle" onClick={handleToggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
      </button>
    </nav>
  )
}

export default Nav

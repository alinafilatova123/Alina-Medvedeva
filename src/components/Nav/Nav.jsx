import React, {useState} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="am__nav">

      <Link to={'/'} style={{textDecoration: 'none'}}>
        <span className="am__nav-logo">Алина Медведева</span>
      </Link>
      <div className={`am__nav-items ${isOpen && "open"}`}>
        <a href="#works" onClick={() => setIsOpen(!isOpen)}>Мои Работы</a>
        <a href="#about" onClick={() => setIsOpen(!isOpen)}>Про Меня</a>
        <a href="#contact" onClick={() => setIsOpen(!isOpen)}>Связаться Со Мной</a>
      </div>

      <div
        className={`am__nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Nav
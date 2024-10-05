import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
  return (
   
    <section className="navbar">
  <div className="navbar-content">
    <div className="logo">
      <img alt="logo" className="logo-img" src={logo} />
    </div>
    <nav className="nav-links">
      <Link to='/'>Home</Link>
      <Link to='/rewards'>Rewards</Link>
      <a >Community</a>
    </nav>
    <div className="action-buttons">
      <button className="join-btn">
        <span>Log In</span>
        <span className="icon">
          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </span>
      </button>
      <button className="contact-btn">
        <span>Sign Up</span>
        <span className="icon">
          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
  <div className="mobile-navbar">
    <img alt="logo" className="mobile-logo" src={logo} />
    <button className="mobile-menu" onClick={toggleMobileMenu}>
      
    </button>
    
  {isMobileMenuOpen && (
          <ul classNameName="mobile-menu-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><a href="/">Community</a></li>
            
          </ul>
        )}
      </div>
</section>

 
  )
}

export default Navbar

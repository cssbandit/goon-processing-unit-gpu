import React from 'react';
import './Header.css';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
                     <div className="logo">
             <img src="/logo.png" alt="GPU Logo" className="logo-image" />
           </div>
                     <nav className="nav">
             <div className="nav-item">
               <span>Goon</span>
               <FiChevronDown />
             </div>
             <div className="nav-item">
               <span>Pump</span>
               <FiChevronDown />
             </div>
             <div className="nav-item">
               <span>Dump</span>
               <FiChevronDown />
             </div>
           </nav>
        </div>
        
                 <div className="header-center">
           <span className="conference-details">
             8kKKjzY9FiuN8feLS3hrCiCkQQjkMP3qK4zTpD4vpump
           </span>
         </div>
        
                 <div className="header-right">
           <button className="gtc-tour-btn">Join Goon Network</button>
         </div>
      </div>
    </header>
  );
};

export default Header;

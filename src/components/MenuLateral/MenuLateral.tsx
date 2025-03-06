import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./MenuLateral.css";

const MenuLateral: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={`menu-lateral ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLateral;
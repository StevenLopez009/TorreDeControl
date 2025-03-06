import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./MenuLateral.css";

interface MenuLateralProps {
  onFleetClick: () => void;
}

const MenuLateral:  React.FC<MenuLateralProps> = ({ onFleetClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <button onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={`menu-lateral ${isOpen ? 'open' : 'closed'}`}>
      <ul>
      <li>
            <a href="#" onClick={() => { toggleMenu(); onFleetClick(); }}>
              Fleet
            </a>
          </li>
          <li onClick={toggleMenu}>Services</li>
          <li onClick={toggleMenu}>About</li>
          <li onClick={toggleMenu}>Sustainability</li>
          <li onClick={toggleMenu}>Media Center</li>
          <li onClick={toggleMenu}>Careers</li>
          <li onClick={toggleMenu}>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLateral;
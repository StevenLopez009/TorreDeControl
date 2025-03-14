import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./MenuLateral.css";

interface MenuLateralProps {
  onFleetClick: () => void;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ onFleetClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Overlay para cerrar el menú al hacer clic afuera */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Botón de menú */}
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Menú lateral */}
      <div className={`menu-lateral ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="/fleet" onClick={() => { toggleMenu(); onFleetClick(); }}>
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

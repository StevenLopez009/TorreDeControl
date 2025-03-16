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
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={`menu-lateral ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="/fleet" onClick={() => { toggleMenu(); onFleetClick(); }}>
              Fleet
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLateral;

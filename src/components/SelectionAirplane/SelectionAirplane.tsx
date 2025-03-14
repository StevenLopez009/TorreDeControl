import React, { useState } from "react";
import "./SelectionAirplane.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface SelectionAirplaneProps {
  onSelect: string;
}

const SelectionAirplane: React.FC<SelectionAirplaneProps> = ({ onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const airplanes = [
    { name: "A320", modelSrc: "/models/ModelA320.glb" },
    { name: "A340", modelSrc: "/models/A340Textures.glb" },
    { name: "A330", modelSrc: "/models/modeloa330texturas.glb" },
  ];

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="selection-airplane">
          {!isMenuOpen &&(
            <div className="selected-value" >
              <label htmlFor="airplane-select">{onSelect}</label> 
              <div className="selected-value" onClick={handleArrowClick}>
                <ArrowDownwardIcon style={{ cursor: "pointer", marginLeft: "8px" }} />
              </div>
            </div>
          )}
        {isMenuOpen && (
          <>
              <div onClick={handleArrowClick} >
                <ArrowUpwardIcon/>
              </div>
              <div className="options-menu">
                {airplanes.map((airplane) => (
                  <div
                    key={airplane.modelSrc}
                    className="option"
                  >
                    {airplane.name}
                  </div>
                ))}
              </div>
          </>
        )}
    </div>
  );
};

export default SelectionAirplane;

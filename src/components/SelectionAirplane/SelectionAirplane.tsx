import React, { useState } from "react";
import "./SelectionAirplane.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface SelectionAirplaneProps {
  onSelect: string;
  onSelectModel: (modelSrc: string) => void;
}

const SelectionAirplane: React.FC<SelectionAirplaneProps> = ({ onSelect, onSelectModel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const airplanes = [
    { name: "A320", modelSrc: "/models/ModelA320.glb" },
    { name: "A340", modelSrc: "/models/A340Textures.glb" },
    { name: "A330", modelSrc: "/models/modeloa330texturas.glb" },
  ];

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const handleModelSelect = (modelSrc: string) => {
    onSelectModel(modelSrc); 
    setIsMenuOpen(false); 
  };

  return (
    <div className="selection-airplane">
    {!isMenuOpen ? (
      <div className="selected-value" onClick={handleArrowClick}>
        <label htmlFor="airplane-select">{onSelect}</label> 
        <ArrowDownwardIcon/>
      </div>
    ) : (
      <>
        <div className="selected-value" onClick={handleArrowClick}>
          <div className="options-menu">
            {airplanes.map((airplane) => (
              <div
                key={airplane.modelSrc}
                className="option"
                onClick={() => handleModelSelect(airplane.modelSrc)} 
              >
                {airplane.name}
              </div>
            ))}
          </div>
          <ArrowUpwardIcon />
        </div>
      </>
    )}
  </div>
  );
};

export default SelectionAirplane;

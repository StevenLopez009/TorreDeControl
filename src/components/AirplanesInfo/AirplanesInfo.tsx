import "./AirplanesInfo.css"
import image from "../../assets/image.webp"

const AirplanesInfo: React.FC = () => {
  return (
    <div className="airplanes">
      <div className="airplanes-info">
        <div className="airplanes-info__name">
          A340
        </div>
        
        <div className="airplanes-info__content">
          <div className="airplanes-info__navbar">
          <ul>
            <li>Airbus A220</li>
            <li>Airbus A320</li>
            <li>Airbus A330</li>
            <li>Airbus A350</li>
            <li>Boeing 747</li>
          </ul>
        </div>
        </div>
      </div>
      <img className="imageAirplane" src={image} alt="" />
    </div>
    
  );
};

export default AirplanesInfo;

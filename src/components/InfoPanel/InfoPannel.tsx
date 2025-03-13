import "./InfoPannel.css"

interface InfoPannelProps{
  nameAirplane: string;
  seats: number;
  Business: number;
  Premium: number;  
  Economy: number;
  Range: number;
}

const InfoPannel: React.FC <InfoPannelProps>= ({nameAirplane, seats, Business, Premium, Economy, Range}) => {
  return (
    <section className='airplane-info'>
      <div className="airplane-title">
        <p>Registration</p>
        <h1>{nameAirplane}</h1>
      </div>
      <dl className="airplane-specs">
        <div className="spec-item">
          <dt>Model</dt>
          <dd>{nameAirplane}</dd>
        </div>

        <div className="spec-item">
          <dt>Current Passenger Seating</dt>
          <dd>{seats} Seats</dd>
        </div>

        <div className="spec-item">
          <dt>Cabin Configuration</dt>
          <dd>{Business} Business | {Premium} Premium Economy | { Economy} Economy</dd>
        </div>

        <div className="spec-item">
          <dt>Maximum Range</dt>
          <dd>{Range}</dd>
        </div>

        <div className="spec-item">
          <dt>Manufacturer</dt>
          <dd>Airbus</dd>
        </div>
      </dl>
    </section>
  );
};

export default InfoPannel;
import {useNavigate}  from 'react-router-dom';
import Logo from '../../assets/logo-removebg-preview.png';

const LogoContainer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Redirige a la ruta principal
  };

  return (
    <div className="container-logo">
      <img src={Logo} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default LogoContainer;
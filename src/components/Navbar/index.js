// == Import : npm
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

// import local
import logo from '../../assets/images/logo.png';
import Menu from '../../containers/Menu';
import SwitchButton from '../../containers/SwitchButton';
import help from '../../assets/images/question-circle.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import burgerMenu from '../../assets/images/burger-menu.svg'
import './style.scss';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
    <ToastContainer />
      <div className="navbar-content">
        <Link to="/"><img src={logo} className="navbar-logo" alt="logo" /></Link>
        <Link to="/"><h1 className="navbar-title">MapQuiz</h1></Link>
        {location.pathname === '/questions' ? (<SwitchButton />) : null }
      </div>
      <Link to="/manual"><img className="navbar-help" src={help} alt="bouton-d'aide" /></Link>
      <Menu />
    </div>
  );
};

export default Navbar;

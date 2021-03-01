// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './style.scss';

const Greetings = () => (
  <>
    <div className="greetings">
      <h2 className="greetings-subtitle">Remerciement</h2>
      <p className="greetings-p">Nous tenos à remercier tous les ...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Link to="/" className="greetings-btn">Accueil</Link>
    </div>
  </>
);

export default Greetings;

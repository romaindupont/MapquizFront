/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// == Import : local
import rocket from '../../assets/images/rocket.svg';

// == Import : style
import './style.scss';

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="homepage">
      <div className="homepage-bloc">
        <h2 className="homepage-title">{location.pathname === '/' ? 'MapQuiz, le meilleur jeu pour comprendre le monde et le système solaire.' : 'Tu es bien inscris ! Tu peux à présent te connecter via le menu.' }</h2>
        {location.pathname === '/'
          ? (
            <>
              <h3 className="homepage-description">Prépare-toi !</h3>
              <p className="homepage-content">
                Mapquiz est une application Web destinée aux jeunes enfants sachant lire ou accompagnés d’un adulte, qui a pour but de s’amuser tout en répondant à des questions.
                Les quiz portent sur des questions de géographie et d’astronomie.
              </p>
            </>
          )
          : null }
        <Link exact="true" to="/questions">
          <button className="homepage-button animate__animated animate__bounce" type="button">
            C&apos;est parti !
            <img src={rocket} alt="fusée" className="homepage-img" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

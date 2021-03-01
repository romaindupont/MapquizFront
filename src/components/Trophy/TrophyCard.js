// == Import : npm
import React from 'react';

// == Import : local
import Badge from '../../assets/images/badge.png';

const TrophyCard = () => (
  <div className="trophy-card">
    <h2 className="trophy-card-title">Trophy name</h2>
    <img className="trophy-card-badge" src={Badge} alt="" />
    <p className="trophy-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque, nesciunt suscipit ipsa nemo est dolore.</p>
    <p className="trophy-card-lvl">lvl 10</p>
  </div>
);

export default TrophyCard;

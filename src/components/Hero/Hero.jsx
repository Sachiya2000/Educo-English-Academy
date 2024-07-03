/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css';
import darkArrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome to Educo</h1>
        <p>
          Our mission is to make education accessible to everyone.Our mission is
          to make education accessible to everyone.Our mission is to make
          education accessible to everyone.Our mission is to make education
          accessible to everyone.Our mission is to make education accessible to
          everyone.
        </p>
        <button className='btn'>Explore More <img src={darkArrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero

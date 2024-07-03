/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.png';
import playIcon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
        <img src={playIcon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About ICT Club</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis aperiam, veniam, voluptate ipsum exercitationem suscipit iste eius, perferendis aspernatur doloribus consequuntur quis magni soluta tenetur ab deleniti laboriosam reiciendis nam sit aut nemo sapiente mollitia libero! Harum, molestias nobis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, inventore similique distinctio ipsum atque quam dicta a reprehenderit possimus. Molestias quibusdam at dolore mollitia beatae officia, blanditiis culpa.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam at vitae, tempore commodi molestias doloribus ullam harum consectetur sapiente rem. Minima doloribus quod, cupiditate sit, laborum sapiente vitae accusamus similique soluta debitis fugiat quibusdam?</p>
        
      </div>
    </div>
  );
}

export default About

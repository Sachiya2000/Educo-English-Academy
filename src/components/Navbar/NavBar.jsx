/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';


const NavBar = () => {

const [sticky, setSticky] =useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            setSticky(true)
        }
        else{
            setSticky(false)
        }
    })
},[])


  return (
    <div>
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt='image' className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>

        </ul>
      </nav>
    </div>
  )
}

export default NavBar

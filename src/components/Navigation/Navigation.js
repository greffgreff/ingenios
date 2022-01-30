import React from 'react';
import './Navigation.css';
// import '../FancyLinks.css';
import TitledLogo from '../TitledLogo/TitledLogo.js';

export default function Navigation() {
  return <div className='navigation-container'>
    <div className='navigation-wrapper'>
      <TitledLogo />
      <div className='links'>
          <a className='link-item'>Our Services</a>
          <a className='link-item'>Our Team</a>
          <a className='link-item'>Starting With Us</a>
          <a className='link-item'>Contact Us</a>
      </div>
    </div>
  </div>;
}

import React from 'react';
import './Navigation.css';
import TitledLogo from '../TitledLogo/TitledLogo.js';

export default function Navigation() {
  return <div className='navigation-container'>
    <div className='wrapper'>
      <TitledLogo />
      <div className='links'>
          <p>page1</p>
          <p>page2</p>
          <p>page3</p>
          <p>page4</p>
          <p>page5</p>
      </div>
    </div>
  </div>;
}

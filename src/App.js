import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import OurService from './components/OurService/OurService';
import OurTeam from './components/OurTeam/OurTeam';

export default function App() {
  return <>
    <Navigation />
    {/* <OurService /> */}
    <OurTeam />
  </>;
}

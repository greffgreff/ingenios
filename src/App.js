import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Banner from './components/Banner/Banner';
import OurService from './components/OurService/OurService';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';

export default function App() {
  return <>
    <Navigation />
    <Banner />
    <main>
      <OurService />
      <OurTeam />
    </main>
    <Footer />
  </>;
}

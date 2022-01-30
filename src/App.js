import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Banner from './components/Banner/Banner';
import OurService from './components/OurService/OurService';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Sidebar from './components/Sidebar/Sidebar';

export default function App() {
  return <>
    <Navigation />
    <Banner />
    <Sidebar />
    <main>
      <OurService />
      <OurTeam />
      <SectionHeader content={ { title:"Starting With Us", subtitle:"Here is what you should know" } } />
      <SectionHeader content={ { title:"Contact Us", subtitle:"We are available 24/7" } } />
    </main>
    <Footer />
  </>;
}

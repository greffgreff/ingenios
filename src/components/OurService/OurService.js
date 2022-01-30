import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function OurService() {
  const title = "What We Offer You"
  const subtitle = "This is some text describing what our company focuses on primarly."
  const content = { title, subtitle }
  
  return <div className='service-container'>
    <SectionHeader content={ content }/>
  </div>;
}

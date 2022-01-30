import React from 'react';
import './OurService.css'
import SectionHeader from '../SectionHeader/SectionHeader';
import FeatureItem from './FeatureItem/FeatureItem';

export default function OurService() {
  return <div className='section-container'>
    <SectionHeader content={ { title:"Our Service", subtitle:"This is some text describing what our company focuses on primarly." } }/>
    <div className='feature-items'>
      <FeatureItem />
      <FeatureItem />
      <FeatureItem />
    </div>
  </div>;
}

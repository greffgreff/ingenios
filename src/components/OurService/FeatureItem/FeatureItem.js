import React from 'react';
import './FeatureItem.css'

export default function FeatureItem() {
  return <div className='feature-item-container'>
      <div className='feature-title'>A Short Title</div>
      <div className='feature-icon'></div>
      <div className='feature-description'>This is some long text to illustrate a description.</div>
  </div>;
}

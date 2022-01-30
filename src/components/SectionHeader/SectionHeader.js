import React from 'react';
import './SectionHeader.css'

export default function SectionHeader({ content }) {
  return <div className='section-header-container'>
      <h1 className='section-title'>{content.title}</h1>
      <p className='section-ubtitle'>{content.subtitle}</p>
  </div>;
}

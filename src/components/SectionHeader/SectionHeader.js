import React from 'react';
import './SectionHeader.css'

export default function SectionHeader({ content }) {
  return <div className='section-header-container'>
      <h1>{content.title}</h1>
      <p className='subtitle'>{content.subtitle}</p>
  </div>;
}

import React from 'react';
import './TeamMemberItem.css'

export default function TeamMemberItem({ desc }) {
  return <div className='member-container'>
    <div className='memeber-container-wrapper'>
      <img className='profile-picture' />
      <div className='description'>
        <p>{desc}</p>
      </div>
    </div>
  </div>;
}

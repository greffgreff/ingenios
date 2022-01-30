import React from 'react';
import './OurTeam.css';
import TeamMemberItem from './TeamMemberItem/TeamMemberItem';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function OurTeam() {
  return <div className='team-container'>
    <SectionHeader content={ "Meet The Team", "This is a short but subtle subtitle." } />
    <div className='team-memebers'>
      <TeamMemberItem desc = { "Description number one. This is some really long text as description." } />
      <TeamMemberItem desc = { "Description number two. Same as before, this is to illustrator that its a description" } />
    </div>
  </div>;
}

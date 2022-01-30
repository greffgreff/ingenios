import React from 'react';
import './OurTeam.css';
import TeamMemberItem from './TeamMemberItem/TeamMemberItem';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function OurTeam() {
  return <div className='team-container'>
    <SectionHeader content={ { title:"Meet The Team", subtitle:"This is a short but subtle subtitle about the team of the company." } } />
    <div className='team-memebers'>
      <TeamMemberItem desc = { "Description number one. This is some really long text as description." } />
      <TeamMemberItem desc = { "Description number two. Same as before, this is to illustrator that its a description" } />
    </div>
  </div>;
}

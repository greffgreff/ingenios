import React from 'react';
import './OurTeam.css';
import TeamMemberItem from './TeamMemberItem/TeamMemberItem';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function OurTeam() {
  const title = "Meet The Team"
  const subtitle = "This is a short but subtle subtitle about the team of the company."
  const content = { title, subtitle }

  return <div className='team-container'>
    <SectionHeader content={ content } />
    <div className='team-memebers'>
      <TeamMemberItem desc = { "Description number one. This is some really long text as description." } />
      <TeamMemberItem desc = { "Description number two. Same as before, this is to illustrator that its a description" } />
    </div>
  </div>;
}

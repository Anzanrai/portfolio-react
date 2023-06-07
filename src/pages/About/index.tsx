import React from 'react';

import './index.scss';
import NavBar from '../../components/NavBar'
import SocialPanel from '../../components/SocialPanel'

function Resume() {
  return (
    <div className='resume-page'>
        <NavBar />
        <div className='resume-page-content'></div>
        <SocialPanel />
    </div>
  )
}

export default Resume
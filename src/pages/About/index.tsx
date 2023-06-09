import React from 'react';

import './index.scss';
import NavBar from '../../components/NavBar'
import SocialPanel from '../../components/SocialPanel'

function Resume() {
  const summary ='I am a versatile developer proficient in frontend and backend technologies, with expertise in multiple programming languages. Skilled in HTML, CSS, and JavaScript, I create responsive user interfaces using frameworks like React, and Typescript. On the backend, I design RESTful APIs, handle data storage, and implement security measures. With a strong problem-solving ability, I troubleshoot and optimize code execution. I am experienced in agile environments, collaborating with cross-functional teams to deliver exceptional results. Proficient in communicating complex technical concepts, I am an effective team player. Adaptable to new technologies, my skills ensure the development of robust and user-friendly web applications.';
  return (
    <div className='resume-page'>
        <NavBar />
        <div className='resume-page-content'>
          <div className="summary-content">
            <p className='animate__animated animate__fadeInUp'>{summary}</p>
          </div>
          <div className='snap-container'>
            <div className='snap-container-child child-one'></div>
            <div className='snap-container-child child-two'></div>
          </div>
        </div>
        <SocialPanel />
    </div>
  )
}

export default Resume
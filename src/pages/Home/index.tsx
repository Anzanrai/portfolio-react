import 'animate.css';
import myPic from '../../assets/images/me.jpeg';

import './index.scss';
import NavBar from '../../components/NavBar';
import Board from '../../components/Board';
import TypedComponent from '../../components/TypedComponent';
import SocialPanel from '../../components/SocialPanel/index';
import React from 'react';
import Hire from '../../components/Hire/index';

const Home = () => {
  const banners = ['A Frontend Developer.', 'A Backend Developer.'];

  return (
    <div className="home_container">
      <NavBar />
      <div className="content-wrapper">
        <div className="child">
          <div className="child-image">
            <img src={myPic} alt="me working" />
          </div>
          <div className="child-content">
            <span>I am Anjan Rai.</span>
          </div>
          <div className="child-content">
            <TypedComponent
              typedStrings={banners}
              typeSpeed={100}
              backSpeed={50}
            />
          </div>
        </div>
        <Board />
      </div>
      <SocialPanel />
      <Hire />
    </div>
  );
};

export default Home;

import 'animate.css';
import myPic from '../../assets/images/me.jpeg';

import './index.scss';
import NavBar from '../../components/NavBar';
import Board from '../../components/Board';
// import TypedComponent from '../../components/TypedComponent';
import SocialPanel from '../../components/SocialPanel/index';
// import React from 'react';
import Hire from '../../components/Hire/index';
import * as React from 'react';

const Home = () => {
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
            <span className="variable-text">
              A Front-end as well as a Backend Developer.
            </span>
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

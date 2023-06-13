import NavBar from '../../components/NavBar/';
import SocialPanel from '../../components/SocialPanel';
import Hire from '../../components/Hire';

import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

import './index.scss';
import AnimatedBackground from '../../components/AnimatedBackground/index';
import * as React from 'react';
// import React from 'react';

const Contact = (): React.ReactElement => {
  return (
    <>
      <div className="contact-content-wrapper">
        <NavBar />
        <div className="contact-content">
          <p>
            I am passionate about working on exciting projects, especially those
            related to critical sectors like health and education. I strive to
            contribute to meaningful advancements in these areas, utilizing my
            skills and expertise to make a positive impact on people's lives.
          </p>
          <p>
            If you have any interesting project to work on and want to collab,
            get in touch with me.
          </p>
          <div className="contact-content-media">
            <div className="contact-content-media-section">
              <AiOutlineMail className="contact-content-media-icon" />
              <a href="mailto:anzaan.rai@gmail.com">anzaan.rai@gmail.com</a>
            </div>
            <div className="contact-content-media-section">
              <AiFillLinkedin className="contact-content-media-icon" />
              <a
                href="https://www.linkedin.com/in/anjan-rai-58197878/"
                target="_blank"
              >
                https://www.linkedin.com/in/anjan-rai-58197878/
              </a>
            </div>
            <div className="contact-content-media-section">
              <FaTwitter className="contact-content-media-icon" />
              <a href="https://twitter.com/anzan_rai" target="_blank">
                https://twitter.com/anzan_rai
              </a>
            </div>
          </div>
        </div>
        <SocialPanel />
        <Hire />
      </div>
      <AnimatedBackground />
    </>
  );
};

export default Contact;

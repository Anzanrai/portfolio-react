import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';
import './index.scss';
import { Link } from 'react-router-dom';
import * as React from 'react';

const SocialPanel = () => {
  const githubLink: string = 'https://github.com/Anzanrai';
  const linkedinLink: string =
    'https://www.linkedin.com/in/anjan-rai-58197878/';
  const twitterLink: string = 'https://twitter.com/anzan_rai';
  return (
    <footer className="container">
      <div className="iconWrapper">
        <Link to={githubLink} target="_blank">
          <DiGithubBadge className="icon" />
        </Link>
      </div>
      <div className="iconWrapper">
        <Link to={linkedinLink} target="_blank">
          <AiFillLinkedin className="icon" />
        </Link>
      </div>
      <div className="iconWrapper">
        <Link to={twitterLink} target="_blank">
          <FaTwitter className="icon" />
        </Link>
      </div>
    </footer>
  );
};

export default SocialPanel;

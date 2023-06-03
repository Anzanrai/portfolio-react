import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import './index.scss';
import { Link } from 'react-router-dom';
import * as React from 'react';

const SocialPanel = () => {
  const githubLink: string = 'https://github.com/Anzanrai';
  const linkedinLink: string =
    'https://www.linkedin.com/in/anjan-rai-58197878/';
  return (
    <div className="container">
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
    </div>
  );
};

export default SocialPanel;

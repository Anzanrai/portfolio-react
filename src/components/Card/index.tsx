// import React from 'react'
import './index.scss';
import * as React from 'react';

const Card = (projectDetail: {
  imageLink: string;
  projectTitle: string;
  description: string;
  projectLink: string;
}) => {
  return (
    <div className="card">
      <div className="image">
        <a href={projectDetail.projectLink} target="_blank">
          <img src={projectDetail.imageLink} />
        </a>
      </div>
      <div className="content">
        <a href={projectDetail.projectLink} target="_blank">
          <h3>{projectDetail.projectTitle}</h3>
        </a>
        <p>{projectDetail.description}</p>
      </div>
    </div>
  );
};

export default Card;

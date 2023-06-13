import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import SocialPanel from '../../components/SocialPanel';
import './index.scss';
import Hire from '../../components/Hire/index';
import { client } from '../../../sanity/sanity-utils';

const Portfolio = () => {
  const [sanityProjects, setSanityProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
        _id, _createdAt, projectTitle, description, "imageLink": imageLink.asset->url, url, projectLink
      }`
      )
      .then((result: any) => {
        setSanityProjects(result);
      })
      .catch((error: any) => console.log(error));
    return () => {
      console.log('Component will be unmount');
    };
  }, []);

  console.log('Projects from sanity', sanityProjects);

  return (
    <>
      <NavBar />
      <div>
        <div className="description-container">
          <p>
            In my work, I have had the opportunity to delve into diverse
            projects that demanded the utilization of various programming
            languages. Through my journey, I have honed my skills in an array of
            programming languages, allowing me to adapt to the specific
            requirements of each project. From developing web applications using
            HTML, CSS, and JavaScript, ReactJS, Redux, Typescript to
            constructing robust backend systems with Python and NodeJS, I have
            embraced the versatility of programming languages. My proficiency in
            multiple programming languages has enabled me to tackle complex
            challenges and deliver innovative solutions tailored to the unique
            needs of each project.
          </p>
        </div>
      </div>

      <h2>My Projects</h2>
      <div className="card-container">
        {sanityProjects?.map(
          ({ imageLink, projectLink, projectTitle, description }, i) => (
            <Card
              key={i}
              imageLink={imageLink}
              projectTitle={projectTitle}
              projectLink={projectLink}
              description={description}
            />
          )
        )}
      </div>

      <SocialPanel />
      <Hire />
    </>
  );
};

export default Portfolio;

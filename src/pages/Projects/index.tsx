// import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import SocialPanel from '../../components/SocialPanel';
import './index.scss';
import Hire from '../../components/Hire/index';
import * as React from 'react';

interface project {
  projectTitle: string;
  description: string;
  imageLink: string;
  projectLink: string;
}

const Portfolio = () => {
  const projects: project[] = [
    {
      projectTitle: 'Muzicly',
      description:
        'The Music Player App is a ReactJS and Redux-powered application similar to Spotify. It utilizes the ShazamCore API for retrieving music-related data, providing users with a seamless music streaming experience. Search for songs, create playlists, and enjoy uninterrupted playback in this dynamic and intuitive app.',
      imageLink: 'https://i.postimg.cc/0NqwK5Dw/muzicly-logo.png',
      projectLink: 'https://muzicly.netlify.app/',
    },
    {
      projectTitle: 'GlobalMedics',
      description:
        'GlobalMedics is a MERN stack project that facilitated remote communication between doctors and patients during COVID-19. It provided virtual appointments, medical information, and mental health support, improving healthcare accessibility.',
      imageLink: 'https://i.postimg.cc/jjvGn5mg/globalmedics-logo.gif',
      projectLink: 'https://globalmedics.ai/',
    },
    {
      projectTitle: 'RevvedAI',
      description:
        'At Revved AI, I worked as a backend developer using MongoDB, Node.js, and Express.js to create an AI-based learning and coaching platform to help improve the learning procedure of students.',
      imageLink: 'https://i.postimg.cc/VNMW2HBj/revved-ai-logo.png',
      projectLink: 'https://www.revved.ai/',
    },
    {
      projectTitle: 'Flappy Bird - Clone',
      description:
        'The Flappy Bird Clone project is a recreation of the popular mobile game using HTML, CSS, and JavaScript. It showcases my skills in front-end web development by combining structured HTML, visually appealing CSS, and interactive JavaScript to create a fun and engaging Flappy Bird clone that can be played directly in a web browser.',
      imageLink: 'https://i.postimg.cc/26tjvTMK/flappy-logo.png',
      projectLink: 'https://flappy-bird-app.netlify.app/',
    },
  ];

  // const [sanityProjects, setSanityProjects] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "project"]{
  //       _id, _createdAt, projectTitle, description, "imageLink": imageLink.asset->url, url, projectLink
  //     }`
  //     )
  //     .then((result: any) => {
  //       setSanityProjects(result);
  //     })
  //     .catch((error: any) => console.log(error));
  //   return () => {
  //     console.log('Component will be unmount');
  //   };
  // }, []);

  // console.log('Projects from sanity', sanityProjects);

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
        {projects?.map(
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

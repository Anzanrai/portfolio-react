import React from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import SocialPanel from '../../components/SocialPanel';
import './index.scss';
import FlappyImage from '../../assets/images/flappy-logo.png';
import MuziclyImage from '../../assets/images/muzicly-logo.png';
import Hire from '../../components/Hire/index';

const Portfolio = () => {
  const projects = [
    {
      imageLink: MuziclyImage,
      projectTitle: 'Muzicly',
      description:
        'The Music Player App is a ReactJS and Redux-powered application similar to Spotify. It utilizes the ShazamCore API for retrieving music-related data, providing users with a seamless music streaming experience. Search for songs, create playlists, and enjoy uninterrupted playback in this dynamic and intuitive app.',
      projectLink: 'https://muzicly.netlify.app/',
    },
    {
      imageLink: FlappyImage,
      projectTitle: 'Flappy Bird - Clone',
      description:
        'The Flappy Bird Clone project is a recreation of the popular mobile game using HTML, CSS, and JavaScript. It showcases my skills in front-end web development by combining structured HTML, visually appealing CSS, and interactive JavaScript to create a fun and engaging Flappy Bird clone that can be played directly in a web browser.',
      projectLink: 'https://flappy-bird-app.netlify.app/',
    },
  ];
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
        {projects.map(
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

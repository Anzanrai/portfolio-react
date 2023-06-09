// import React,
// import { useState, useEffect } from 'react';

import './index.scss';
import NavBar from '../../components/NavBar';
import SocialPanel from '../../components/SocialPanel';
import Hire from '../../components/Hire/index';
// import { client } from '../../../sanity/sanity-utils';
import * as React from 'react';

interface experience {
  position: string;
  jobType: 'fulltime' | 'part-time' | 'contract';
  startDate: string;
  endDate?: string;
  officeName: string;
  location: string;
}

interface education {
  institute: string;
  degree: string;
  studyDate: string;
  location: string;
}

function Resume() {
  const summary =
    'I am a versatile developer proficient in frontend and backend technologies, with expertise in multiple programming languages. Skilled in HTML, CSS, and JavaScript, I create responsive user interfaces using frameworks like React, and Typescript. On the backend, I design RESTful APIs, handle data storage, and implement security measures. With a strong problem-solving ability, I troubleshoot and optimize code execution. I am experienced in agile environments, collaborating with cross-functional teams to deliver exceptional results. Proficient in communicating complex technical concepts, I am an effective team player. Adaptable to new technologies, my skills ensure the development of robust and user-friendly web applications.';

  const experiences: experience[] = [
    {
      position: 'Software Developer',
      jobType: 'part-time',
      startDate: 'January 2021',
      endDate: 'March 2022',
      officeName: 'Robonomics AI',
      location: 'Sydney, New South Wales, Australia',
    },
    {
      position: 'Software Developer Intern',
      jobType: 'part-time',
      startDate: 'September 2020',
      endDate: 'January 2021',
      officeName: 'Robonomics AI',
      location: 'Sydney, New South Wales, Australia',
    },
    {
      position: 'Software Developer Intern',
      jobType: 'fulltime',
      startDate: 'April 2020',
      endDate: 'July 2020',
      officeName: 'Robonomics AI',
      location: 'Sydney, New South Wales, Australia',
    },
    {
      position: 'Software Engineer',
      jobType: 'fulltime',
      startDate: 'November 2016',
      endDate: 'March 2018',
      officeName: 'InfiniaHub',
      location: 'Tinkune, Subidha Nagar, Kathmandu, Nepal',
    },
    {
      position: 'Software Engineer',
      jobType: 'fulltime',
      startDate: 'November 2014',
      endDate: 'November 2016',
      officeName: 'Deerwalk Services Pvt. Ltd.',
      location: 'Tamreshwor Mahadevsthan, Sifal, Kathmandu, Nepal',
    },
  ];
  const educations: education[] = [
    {
      degree: 'Masters of Technology (Software Engineering)',
      institute: 'Federation University',
      studyDate: 'March 2018 - November 2019',
      location: 'Sydney, New South Wales, Australia',
    },
    {
      degree: 'Bachelors in Computer Engineering',
      institute: 'Institute of Engineering, Pulchowk Campus',
      studyDate: 'November 2010 - July 2014',
      location: 'Pulchowk Lalitpur, Bagmati, Nepal',
    },
  ];
  // const [experiences, setExperiences] = useState<experience[]>([]);
  // const [educations, setEducations] = useState<education[]>([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "experience"]{
  //       _id, _createdAt, position, jobType, startDate, endDate, officeName, location
  //     }`
  //     )
  //     .then((result: any) => {
  //       setExperiences(result);
  //     })
  //     .catch((error: any) => console.log(error));

  //   client
  //     .fetch(
  //       `*[_type == "education"]{
  //       _id, _createdAt, degree, institute, studyDate, location
  //     }`
  //     )
  //     .then((result: any) => {
  //       setEducations(result);
  //     })
  //     .catch((error: any) => console.log(error));
  //   return () => {
  //     console.log('Component will be unmount');
  //   };
  // }, []);

  return (
    <div className="resume-page">
      <NavBar />
      <div className="resume-page-content">
        <div className="snap-container">
          <div className="snap-container-child summary-content">
            <p className="animate__animated animate__fadeInUp">{summary}</p>
          </div>
          <div className="snap-container-child child-one">
            <h2>Experience</h2>
            {experiences.map((exp, i) => {
              return (
                <div className="exp" key={i}>
                  <h3>{exp.position}</h3>
                  <span className="exp-office">{`${exp.officeName}`}</span>
                  <br />
                  <span className="exp-duration">{`${exp.startDate} - ${exp.endDate}`}</span>
                  <p className="exp-extras">
                    {exp.jobType}
                    <br />
                    {exp.location}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="snap-container-child child-two">
            <h2>Education</h2>
            {educations.map((education, i) => {
              return (
                <div className="knowledge" key={i}>
                  <h3>
                    {education.degree} <span>{education.institute}</span>
                  </h3>
                  <span className="knowledge-date">{education.studyDate}</span>
                  <br />
                  <span className="knowledge-location">
                    {education.location}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SocialPanel />
      <Hire />
    </div>
  );
}

export default Resume;

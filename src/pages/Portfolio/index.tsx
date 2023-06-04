import React from "react";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import SocialPanel from "../../components/SocialPanel";
import "./index.scss";

const Portfolio = () => {
  return (
    <>
        <NavBar />
        <div>
        <div className="description-container">
          <p>
          In my work, I have had the opportunity to delve into diverse projects that demanded the utilization of various programming languages. Through my journey, I have honed my skills in an array of programming languages, allowing me to adapt to the specific requirements of each project. From developing web applications using HTML, CSS, and JavaScript, ReactJS, Redux, Typescript to constructing robust backend systems with Python and NodeJS, I have embraced the versatility of programming languages. My proficiency in multiple programming languages has enabled me to tackle complex challenges and deliver innovative solutions tailored to the unique needs of each project.
          </p>
        </div>
        </div>
        
        <h2>My Projects</h2>
        <div className="card-container">
        {[1,2,3, 4,  5 ,6,7,8,9].map(() => <Card/>)}
        </div>
        
        <SocialPanel />
    </>
  )
}

export default Portfolio;
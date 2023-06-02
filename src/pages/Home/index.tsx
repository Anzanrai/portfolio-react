import 'animate.css';
import myPic from '../../assets/images/me.jpeg';

import './index.scss';
import NavBar from '../../components/NavBar';
import Board from '../../components/Board';
import TypedComponent from '../../components/TypedComponent';

const Home = () => {
    
    const banners = ['A Frontend Developer.', 'A Backend Developer'];
    const summary = ['I am a versatile developer proficient in frontend and backend technologies, with expertise in multiple programming languages. Skilled in HTML, CSS, and JavaScript, I create responsive user interfaces using frameworks like React, and Typescript. On the backend, I design RESTful APIs, handle data storage, and implement security measures. With a strong problem-solving ability, I troubleshoot and optimize code execution. I am experienced in agile environments, collaborating with cross-functional teams to deliver exceptional results. Proficient in communicating complex technical concepts, I am an effective team player. Adaptable to new technologies, my skills ensure the development of robust and user-friendly web applications.']
    
    return <div className='home_container'>
        <NavBar />
        <div className='content-wrapper'>
            <div className='child'>
                <div className='child-image'>
                    <img src={myPic} alt="me working" />
                </div>
                <div className='child-content'>
                    <span>I am Anjan Rai.</span>
                </div>
                <div className='child-content'>
                    <TypedComponent typedStrings={banners} typeSpeed={100} backSpeed={50} />
                </div>
                <div className='summary-content'>
                    <TypedComponent typedStrings={summary} typeSpeed={10} backSpeed={50} />
                </div>
            </div>
            <Board />
        </div>
    </div>
}

export default Home;
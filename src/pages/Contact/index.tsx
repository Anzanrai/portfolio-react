import NavBar from '../../components/NavBar/';
import SocialPanel from '../../components/SocialPanel';
import Hire from '../../components/Hire';

import './index.scss';
import AnimatedBackground from '../../components/AnimatedBackground/index';
function Contact() {
  return (
    <>
      <div className="contact-content-wrapper">
        <NavBar />
        Contact
        <SocialPanel />
        <Hire />
      </div>
      <AnimatedBackground />
    </>
  );
}

export default Contact;

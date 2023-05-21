import 'animate.css';
import { FiMenu } from 'react-icons/fi';
import {MdClose} from 'react-icons/md';
import './NavBar.scss';
import { useState } from 'react';

const NavBar = () => {
  const links = [
    {
      linkTo: '/',
      name: 'aboutMe',
      hoverState: false,
      linkTitle: 'About Me',
      className: '',
    },
    {
      linkTo: '/portfolio',
      name: 'portfolio',
      hoverState: false,
      linkTitle: 'Portfolio',
      className: '',
    },
    {
      linkTo: '/resume',
      name: 'resume',
      hoverState: false,
      linkTitle: 'Resume',
      className: '',
    },
    {
      linkTo: '/contact',
      name: 'contactMe',
      hoverState: false,
      linkTitle: 'Contact Me',
      className: '',
    },
  ];

  const handleHoverIn = (e: React.MouseEvent) => {
    e.target.className = 'animate__animated animate__jello';
    // console.log(e.target.id);
    // links.filter(link => (link.name === e.target.id ? link.className = !link.hoverState: link.hoverState));
  };

  const handleHoverOut = (e: React.MouseEvent) => {
    e.target.className = '';
  };

  const [menuState, setMenuState] = useState(false);

  const handleIconClick = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="navbar-wrapper" >
      <ul className="navbar" style={{display: menuState?'flex': 'none'}}>
        {links.map((link) => (
          <li key={link.name}>
            <a
              id={link.name}
              href={link.linkTo}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
            >
              {link.linkTitle}
            </a>
          </li>
        ))}
      </ul>
      <div className="burger-navbar">
        {menuState ? (<MdClose className="icon" onClick={handleIconClick} />) : (
          <FiMenu className="icon" onClick={handleIconClick} />
        )}
      </div>
    </div>
  );
};

export default NavBar;

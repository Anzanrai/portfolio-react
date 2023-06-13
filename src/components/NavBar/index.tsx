import 'animate.css';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './index.scss';
import { useState, useRef } from 'react';
import React from 'react';

const NavBar = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const smWindow = windowSize.current[0] <= 768 ? true : false;
  console.log(windowSize.current[0]);
  const links = [
    {
      linkTo: '/',
      name: 'aboutMe',
      hoverState: false,
      linkTitle: 'Home',
      className: '',
    },
    {
      linkTo: '/projects',
      name: 'portfolio',
      hoverState: false,
      linkTitle: 'Projects',
      className: '',
    },
    {
      linkTo: '/about-me',
      name: 'resume',
      hoverState: false,
      linkTitle: 'About Me',
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

  const [menuState, setMenuState] = useState(false);

  const handleIconClick = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="navbar-wrapper">
      <div
        className="navbar"
        style={{ display: smWindow ? (menuState ? 'flex' : 'none') : 'flex' }}
      >
        <ul className="">
          {links.map((link) => (
            <li key={link.name}>
              <a id={link.name} href={link.linkTo}>
                {link.linkTitle}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="burger-navbar">
        {menuState ? (
          <MdClose className="icon" onClick={handleIconClick} />
        ) : (
          <FiMenu className="icon" onClick={handleIconClick} />
        )}
      </div>
    </div>
  );
};

export default NavBar;

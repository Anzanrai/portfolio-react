import 'animate.css';
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';
import './NavBar.scss';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const links = [
        {
            linkTo: '/',
            name: 'aboutMe',
            hoverState: false,
            linkTitle: 'About Me',
            className: ''
        },
        {
            linkTo: '/',
            name: 'portfolio',
            hoverState: false,
            linkTitle: 'Portfolio',
            className: ''
        },
        {
            linkTo: '/',
            name: 'resume',
            hoverState: false,
            linkTitle: 'Resume',
            className: ''
        },
        {
            linkTo: '/',
            name: 'contactMe',
            hoverState: false,
            linkTitle: 'Contact Me',
            className: ''
        }
    ]
    
    const handleHoverIn = (e: React.MouseEvent) => {
        e.target.className = 'animate__animated animate__jello';
        // console.log(e.target.id);
        // links.filter(link => (link.name === e.target.id ? link.className = !link.hoverState: link.hoverState));
    }

    const handleHoverOut = (e: React.MouseEvent) => {
        e.target.className = '';
    }

    const [menuState, setMenuState] = useState(false);

    const handleIconClick = () => {
        setMenuState(!menuState);     
    }
    
    useEffect(() => {
        menuState ? setBurgerNavlistClass('burger-navlist animate__animated animate__backInRight') : setBurgerNavlistClass('burger_navlist animate__animated animate__backOutRight')
    }, [menuState]);

    const [burgerNavlistClass, setBurgerNavlistClass] = useState('burger-navlist');
    
    return <div className='navbar-wrapper'>
        <ul className="navbar">
            {links.map(link => (
                <li  key={link.name}>
                    <a id={link.name} href={link.linkTo} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>{link.linkTitle}</a>
                </li>
            ))}
        </ul>
        <div className='burger-navbar'>
            {menuState ? null: (<FiMenu className='icon' onClick={handleIconClick} />)}            
        </div>
    </div>
}

export default NavBar;
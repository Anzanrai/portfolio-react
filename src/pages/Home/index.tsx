import 'animate.css';
import Typed from 'typed.js';

import './index.scss';
import NavBar from '../../components/NavBar';
import Board from '../../components/Board';
import { useEffect, useRef } from 'react';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
            'Frontend Developer.',
            'Backend Developer.',
          ],
          typeSpeed: 50,
          backSpeed: 50,
        }
        typed.current = new Typed(el.current, options);
    
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, []);

    
    return <div className='home_container'>
        <NavBar />
        <div className='content-wrapper'>
            <div className='child'>
                <div className='child-content'>
                    <span>I am</span>
                </div>
                <div className='child-content'>
                    <span className='variable-text' style={{whiteSpace: 'normal' }} ref={el} />
                </div>
            </div>
            <Board />
        </div>
    </div>
}

export default Home;
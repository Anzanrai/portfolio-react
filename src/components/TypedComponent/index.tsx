import {useEffect, useRef} from 'react';

import Typed from 'typed.js';

import './index.scss';

const TypedComponent = ({typedStrings, typeSpeed, backSpeed}) => {
    const el = useRef(null);
    const typed = useRef(null);
    useEffect(() => {
        const options = {
            strings: typedStrings,
          typeSpeed: typeSpeed,
          backSpeed: backSpeed,
        }
        typed.current = new Typed(el.current, options);
    
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, []);
  return (
    <span className='variable-text' style={{whiteSpace: 'normal' }} ref={el} />
  )
}

export default TypedComponent
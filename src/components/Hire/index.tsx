import React from 'react';

import './index.scss';

const Hire = (): React.ReactElement => {
  const mailto = () => {
    console.log('Send mail for hiring.');
  };
  return (
    <div className="hire-button" onClick={mailto}>
      Hire Me
    </div>
  );
};

export default Hire;

import React from 'react';

import './index.scss';

const Hire = (): React.ReactElement => {
  const mailto = () => {
    console.log('Send mail for hiring.');
  };
  return (
    <div className="hire-button" onClick={mailto}>
      <a href="mailto:anzaan.rai@gmail.com">Hire Me</a>
    </div>
  );
};

export default Hire;

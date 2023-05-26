import './index.scss';
import html from '../../assets/images/html-logo.png';
import css from '../../assets/images/css-logo.png';
import js from '../../assets/images/js-logo.png';
import mongodb from '../../assets/images/mongodb-logo.png';
import mysql from '../../assets/images/mysql-logo.png';
import node from '../../assets/images/nodejs-logo.png';
import postgresql from '../../assets/images/postgresql-logo.png';
import reactlogo from '../../assets/images/react-logo.png';
import reduxlogo from '../../assets/images/Redux.png';
import sasslogo from '../../assets/images/sass-logo.png';

function Board() {

    const logos = [html, css, js, mongodb, mysql, node, postgresql, reactlogo, reduxlogo, sasslogo];
  return (
    <div className='logo'>
        <span>My Tech Stack</span>
        <div className='logo-slide'>
            {logos.map((logo, indx) => {
                return <img src={logo} key={indx} alt={`logo-${logo}`} />
            })}
        </div>
    </div>
  )
}

export default Board
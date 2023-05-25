import 'animate.css';

import './index.scss';
import NavBar from '../../components/NavBar';
import InfiniteCarousel from '../../components/InfiniteCarousel';

const Home = () => {
    return <div className='home_container'>
        <NavBar />
        <div className='content-wrapper'>
            <div className='child'>Here goes content for description</div>
            <InfiniteCarousel />
        </div>
    </div>
}

export default Home;
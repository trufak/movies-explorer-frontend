import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <h2 className='Footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='Footer__elements'>
        <p className='Footer__copyright'>&copy; {new Date().getFullYear()}</p>
          <ul className='Footer__links'>
            <li>
              <Link className='link Footer__link' to='' >Яндекс.Практикум</Link>
            </li>
            <li>
              <Link className='link Footer__link' to='' >Github</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='NavTab'>
      <ul className='NavTab__links'>
        <li className='NavTab__link-container'>
          <Link className='link NavTab__link' to='#about'>
            О проекте
          </Link>
        </li>
        <li className='NavTab__link-container'>
          <Link className='link NavTab__link' to='#techs'>
            Технологии
          </Link>
        </li>
        <li className='NavTab__link-container'>
          <Link className='link NavTab__link' to='#profile'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;

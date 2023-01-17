import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className='navTab'>
      <ul className='navTab__links'>
        <li className='navTab__link-container'>
          <a className='link navTab__link' href='#about'>
            О проекте
          </a>
        </li>
        <li className='navTab__link-container'>
          <a className='link navTab__link' href='#techs'>
            Технологии
          </a>
        </li>
        <li className='navTab__link-container'>
          <a className='link navTab__link' href='#profile'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;

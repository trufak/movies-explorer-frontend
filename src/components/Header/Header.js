import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';
import Menu from '../Menu/Menu';

const Header = ({ loggedIn }) => {

  const [ isOpenMobileMenu, setIsOpenMobileMenu ] = useState(false);

  const openMobileMenu = () => {
    setIsOpenMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <div className='Header'>
      <img className='Header__logo' src={logo} alt='логотип' />
      {loggedIn
        ? <Menu
            isOpenMobileMenu={isOpenMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
        : <div className='Header__sign-container'>
            <Link
              className='link Header__sign-link'
              to='/signup'
            >
              Регистрация
            </Link>
            <div className='Header__signin'>
              <Link
                className='link Header__sign-link Header__signin-link'
                to='/signin'
              >
                Войти
              </Link>
            </div>
          </div>
      }
      {loggedIn && <button
        className="Header__menu-button Header_only-mobile"
        type='button'
        onClick={openMobileMenu}
        />
      }
    </div>
  )
};

export default Header;

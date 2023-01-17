import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

const Header = ({ loggedIn }) => {

  const [ isOpenMobileMenu, setIsOpenMobileMenu ] = useState(false);

  const openMobileMenu = () => {
    setIsOpenMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <header className='header'>
      <Logo additionalClass='header__logo'/>
      {loggedIn
        ? <Menu
            isOpenMobileMenu={isOpenMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
        : <div className='header__sign-container'>
            <Link
              className='link header__sign-link'
              to='/signup'
            >
              Регистрация
            </Link>
            <Link
              className='link header__sign-link header__signin-link'
              to='/signin'
            >
              Войти
            </Link>
          </div>
      }
      {loggedIn && <button
        className="button header__menu-button header_only-mobile"
        type='button'
        onClick={openMobileMenu}
        />
      }
    </header>
  )
};

export default Header;

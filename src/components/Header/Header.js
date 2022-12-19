import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.jpg';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

const Header = ({ loggedIn }) => {

  const [ isOpenMobileMenu, setIsOpenMobileMenu ] = useState(false);

  const openMobileMenu = () => {
    setIsOpenMobileMenu(true);
  };

  const handleClickCover = (e) => {
    if (e.target.classList.contains('Header__menu-cover')) {
      closeMobileMenu();
    };
  }

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <div className='Header'>
      <img className='Header__logo' src={logo} alt='логотип' />
      {loggedIn
        ? <div className={`
            Header__menu-cover
            ${!isOpenMobileMenu ? 'Header__menu-cover_hidden' : ''}`}
            onClick={handleClickCover}
          >
            <div className='Header__menu'>
              <button
                className='close-button Header__close-button Header_only-mobile'
                type='button'
                onClick={closeMobileMenu}
              />
              <Navigation />
              <Link
                className='link Header__profile'
                to='/profile'
              >
                Аккаунт
                <div
                  className='Header__profile-icon'
                />
              </Link>
            </div>
          </div>
        : <div className='Header__sign-container'>
            <Link
              className='link'
              to='/signup'
            >
              Регистрация
            </Link>
            <div className='Header__signin'>
              <Link
                className='link Header__signin-link'
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

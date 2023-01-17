import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Menu.css';

const Menu = ({ isOpenMobileMenu, closeMobileMenu }) => {

  const handleClickCover = (e) => {
    if (e.target.classList.contains('menu__cover')) {
      closeMobileMenu();
    };
  }

  return (
    <div
      className={`
        menu__cover
        ${!isOpenMobileMenu ? "menu__cover_hidden" : ""}`}
        onClick={handleClickCover}
    >
      <div className="menu__container">
        <button
          className="button close-button menu__close-button menu_only-mobile"
          type="button"
          onClick={closeMobileMenu}
        />
        <Navigation />
        <Link className="link menu__profile" to="/profile">
          Аккаунт
          <div className="menu__profile-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;

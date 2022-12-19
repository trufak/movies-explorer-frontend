import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Menu.css';

const Menu = ({ isOpenMobileMenu, closeMobileMenu }) => {

  const handleClickCover = (e) => {
    if (e.target.classList.contains('Menu__cover')) {
      closeMobileMenu();
    };
  }

  return (
    <div
      className={`
        Menu__cover
        ${!isOpenMobileMenu ? "Menu__cover_hidden" : ""}`}
        onClick={handleClickCover}
    >
      <div className="Menu__container">
        <button
          className="close-button Menu__close-button Menu_only-mobile"
          type="button"
          onClick={closeMobileMenu}
        />
        <Navigation />
        <Link className="link Menu__profile" to="/profile">
          Аккаунт
          <div className="Menu__profile-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;

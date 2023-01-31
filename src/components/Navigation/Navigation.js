import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link
              ${isActive && "link_active navigation__link_active"}
              navigation__link
              navigation__link_only-mobile`
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `
              link
              ${isActive && "link_active navigation__link_active"}
              navigation__link`}
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `
              link
              ${isActive && "link_active navigation__link_active"}
              navigation__link`}
            to="/saved-movies"
          >
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

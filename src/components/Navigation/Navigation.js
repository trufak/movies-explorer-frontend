import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <ul className='Navigation__links'>
        <li>
          <NavLink
            to='/'
            className={({isActive})=>
              `link
              ${isActive && "link_active Navigation__link_active"}
              Navigation__link
              Navigation__link_only-mobile`
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive})=>`
              link
              ${isActive && "link_active Navigation__link_active"}
              Navigation__link`
            }
            to='/movies'
            >
              Фильмы
            </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive})=>`
              link
              ${isActive && "link_active Navigation__link_active"}
              Navigation__link`
            }
            to='/saved-movies'
            >
              Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
    </nav>

  )
};

export default Navigation;

import "./Portfolio.css";
import avatar from "../../images/Vitalia.jpg";
import arrow from "../../images/arrow.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Portfolio = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="portfolio" id="profile">
      <h1 className="title">Студент</h1>
      <div className="portfolio__profile">
        <div className="portfolio__about">
          <h2 className="big-text portfolio__name">{currentUser.name}</h2>
          <p className="portfolio__subtitle">Фронтенд-разработчик, 33 года</p>
          <p className="text portfolio__text">
            Я родился и живу в Сибири, работаю в энергетике. У меня есть жена и
            трое детей. Сейчас прохожу курс по веб-разработке и от сложности
            этого процесса у меня скоро дым из различных мест начнет идти.
          </p>
        </div>
        <a
          className="link portfolio__github"
          href="https://github.com/trufak"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="portfolio__photo"
          alt="Фото пользователя"
          src={avatar}
        />
      </div>
      <p className="portfolio__sites-title">Портфолио</p>
      <ul className="portfolio__sites">
        <li className="portfolio__site-container">
          <a
            className="link portfolio__site-link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__site">Статичный сайт</p>
            <img className="portfolio__site-arrow" src={arrow} alt="Перейти" />
          </a>
        </li>
        <li className="portfolio__site-container">
          <a
            className="link portfolio__site-link"
            href="https://trufak.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__site">Адаптивный сайт</p>
            <img className="portfolio__site-arrow" src={arrow} alt="Перейти" />
          </a>
        </li>
        <li className="portfolio__site-container">
          <a
            className="link portfolio__site-link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__site">Одностраничное приложение</p>
            <img className="portfolio__site-arrow" src={arrow} alt="Перейти" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;

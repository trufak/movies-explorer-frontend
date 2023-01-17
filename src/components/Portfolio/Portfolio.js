import './Portfolio.css';
import { Link } from 'react-router-dom';
import avatar from '../../images/Vitalia.jpg';
import arrow from '../../images/arrow.svg'

const Portfolio = () => {
  return (
    <section className='portfolio' id='profile'>
      <h1 className='title'>Студент</h1>
      <div className='portfolio__profile'>
        <div className='portfolio__about'>
          <h2 className='big-text portfolio__name'>Виталий</h2>
          <p className='portfolio__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='text portfolio__text'>Я родился и живу в Саратове, закончил факультет
          экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
          а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
          в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </div>
        <a
          className='link portfolio__github'
          href='https://github.com/trufak'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
        <img
          className='portfolio__photo'
          alt='Фото пользователя'
          src={avatar}
        />
      </div>
      <p className='portfolio__sites-title'>Портфолио</p>
      <ul className='portfolio__sites'>
        <li className='portfolio__site-container'>
          <a
            className='link portfolio__site-link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__site'>Статичный сайт</p>
            <img
              className='portfolio__site-arrow'
              src={arrow}
              alt='Перейти'
            />
          </a>
        </li>
        <li className='portfolio__site-container'>
          <a
            className='link portfolio__site-link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__site'>Адаптивный сайт</p>
            <img
              className='portfolio__site-arrow'
              src={arrow}
              alt='Перейти'
            />
          </a>
        </li>
        <li className='portfolio__site-container'>
          <a
            className='link portfolio__site-link'
            href='https://practicum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__site'>Одностраничное приложение</p>
            <img
              className='portfolio__site-arrow'
              src={arrow}
              alt='Перейти'
            />
          </a>
        </li>
      </ul>
    </section>

  );
};

export default Portfolio;

import './Portfolio.css';
import { Link } from 'react-router-dom';
import avatar from '../../images/Vitalia.jpg';

const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h1 className='title'>Студент</h1>
      <div className='Portfolio__profile'>
        <div className='Portfolio__about'>
          <h2 className='big-text Portfolio__name'>Виталий</h2>
          <p className='Portfolio__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='text'>Я родился и живу в Саратове, закончил факультет
          экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
          а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
          в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </div>
        <Link
          className='link Portfolio__github'
          to=''
        >
          Github
        </Link>
        <img
          className='Portfolio__photo'
          alt='Фото пользователя'
          src={avatar}
        />
      </div>
      <p className='Portfolio__sites-title'>Портфолио</p>
      <ul className='Portfolio__sites'>
        <li className='Portfolio__site-container'>
          <p className='Portfolio__site'>Статичный файл</p>
          <Link className='Portfolio__site-link' />
        </li>
        <li className='Portfolio__site-container'>
          <p className='Portfolio__site'>Адаптивный файл</p>
          <Link className='Portfolio__site-link' />
        </li>
        <li className='Portfolio__site-container'>
          <p className='Portfolio__site'>Одностраничное приложение</p>
          <Link className='Portfolio__site-link' />
        </li>
      </ul>
    </div>

  );
};

export default Portfolio;

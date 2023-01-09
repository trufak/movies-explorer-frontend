import './AboutProject.css';

const AboutProject = () => {
  return (
    <div className='AboutProject'>
      <h2 className='title'> О проекте </h2>
      <ul className='AboutProject__table'>
        <li className='AboutProject__table-item'>
          <h3 className='AboutProject__column-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='text'>
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='AboutProject__table-item'>
          <h3 className='AboutProject__column-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='text'>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='AboutProject__time-line'>
        <p className='AboutProject__time-backend'> 1 неделя </p>
        <p className='AboutProject__time-desc'> Back-end </p>
        <p className='AboutProject__time-frontend'> 4 недели </p>
        <p className='AboutProject__time-desc'> Front-end </p>
      </div>
    </div>
  );
};

export default AboutProject;

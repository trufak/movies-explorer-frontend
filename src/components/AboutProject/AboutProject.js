import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject" id="about">
      <h2 className="title"> О проекте </h2>
      <ul className="aboutProject__table">
        <li className="aboutProject__table-item">
          <h3 className="aboutProject__column-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="aboutProject__table-item">
          <h3 className="aboutProject__column-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="aboutProject__time-line">
        <p className="aboutProject__time-backend"> 1 неделя </p>
        <p className="aboutProject__time-desc"> Back-end </p>
        <p className="aboutProject__time-frontend"> 4 недели </p>
        <p className="aboutProject__time-desc"> Front-end </p>
      </div>
    </section>
  );
};

export default AboutProject;

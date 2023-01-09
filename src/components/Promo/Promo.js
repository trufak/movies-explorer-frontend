import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  return (
    <div className="Promo">
      <div className="Promo__container">
        <h1 className="big-text Promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </div>
  );
};

export default Promo;

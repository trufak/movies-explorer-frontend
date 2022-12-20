import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  return (
    <div className="Promo">
      <div className="Promo__container">
        <h1 className="Promo__title">
          Курс Веб-разработки - это одно из самых сложных испытаний в моей жизни
        </h1>
        <NavTab />
      </div>
    </div>
  );
};

export default Promo;

import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

const Main = ({ loggedIn }) => {
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Promo />
      <AboutProject />
      <Techs />
    </div>
);
};

export default Main;

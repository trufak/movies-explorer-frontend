import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

const Main = ({ loggedIn }) => {
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Promo />
      <AboutProject />
    </div>
);
};

export default Main;

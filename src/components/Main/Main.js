import Header from '../Header/Header';
import Promo from '../Promo/Promo';

const Main = ({ loggedIn }) => {
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Promo />
    </div>
);
};

export default Main;

import Header from '../Header/Header';

const Main = ({ loggedIn }) => {
  return (
    <div>
      <Header loggedIn={loggedIn} />
    </div>
);
};

export default Main;

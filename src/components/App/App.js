import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: 'Сергей',
    email: 'truf@mail.ru'
  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main loggedIn={loggedIn} /> } />
        <Route path='/movies' element={ <Movies loggedIn={loggedIn}/> } />
        <Route path='/saved-movies' element={ <SavedMovies loggedIn={loggedIn}/> } />
        <Route path='/profile' element={
          <Profile
            loggedIn={loggedIn}
            user={user}
          />
        }
        />
        <Route path='/signin' element={ <Login /> } />
        <Route path='/signup' element={ <Register /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;

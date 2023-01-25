import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleRegister = (values) => {
    return mainApi.signup(values)
    .then((user)=>{
      return handleLogin({
        email: values.email,
        password: values.password,
      });
    })
  };

  const handleLogin = (values) => {
    return mainApi.signin(values)
    .then((data)=>{
      localStorage.setItem('tokenMovies', data.token);
      setCurrentUser(values);
      setLoggedIn(true);
      navigate('/movies');
    })
  };

  return (
    <div className="app">
      <div className='app__content'>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={ <Main loggedIn={loggedIn} /> } />
            <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
              <Route
                path='/movies'
                element={ <Movies loggedIn={loggedIn}/> }
              />
            </Route>
            <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
              <Route
                path='/saved-movies'
                element={ <SavedMovies loggedIn={loggedIn}/> }
              />
            </Route>
            <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
              <Route
                path='/profile'
                element={ <Profile loggedIn={loggedIn} user={currentUser} /> }
              />
            </Route>
            <Route path='/signin' element={
              <Login
                onLogin={handleLogin}
              /> }
            />
            <Route path='/signup' element={
              <Register
                onRegister={handleRegister}
              /> }
            />
            <Route path='*' element={ <NotFoundPage /> } />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;

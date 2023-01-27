import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('tokenMovies');
    if (token) {
      mainApi.headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      Promise.all([getCurrentUser(), mainApi.getMovies()])
      .then(([currentUserInfo, sMovies])=>{
        setLoggedIn(true);
        setSavedMovies(sMovies);
        navigate('/movies');
      })
      .catch(err=>console.log(err));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('savedMovies', savedMovies);
  },[savedMovies]);

  const getCurrentUser = () => {
    return mainApi.getUser()
    .then ((data)=>{
      setCurrentUser({
        ...currentUser,
        ...data.data,
      });
      return data;
    })
  };

  const updateCurrentUser = (user) => {
    return mainApi.updateUser(user)
    .then ((data)=>{
      setCurrentUser({
        ...currentUser,
        ...data.data,
      });
      return data;
    })
  };

  const handleLogout = () => {
    localStorage.removeItem('tokenMovies');
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  };

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
      mainApi.headers = {
        "Authorization": `Bearer ${data.token}`,
        "Content-Type": "application/json",
      }
      setLoggedIn(true);
      return getCurrentUser();})
    .then(()=>{
      navigate('/movies');
    })
    .catch(err=>console.log(err));
  };

  const handleSaveMovie = (movie) => {
    return mainApi.saveMovie(movie)
    .then((data)=>{
      setSavedMovies([...savedMovies, data.data]);
    });
  };

  const handleUnSaveMovie = (movieId) => {
    return mainApi.unSaveMovie(movieId)
    .then((data)=>{
      setSavedMovies(savedMovies.filter((movie)=>movie._id!==data.data._id));
    });
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
                element={
                  <Movies
                    loggedIn={loggedIn}
                    onSaveMovie={handleSaveMovie}
                    onUnSaveMovie={handleUnSaveMovie}
                    savedMovies={savedMovies}
                  /> }
              />
            </Route>
            <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
              <Route
                path='/saved-movies'
                element={
                  <SavedMovies
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onUnSaveMovie={handleUnSaveMovie}
                  />
                }
              />
            </Route>
            <Route element={ <ProtectedRoute loggedIn={loggedIn} /> } >
              <Route
                path='/profile'
                element={
                  <Profile
                    loggedIn={loggedIn}
                    onUpdateUser={updateCurrentUser}
                    onLogout={handleLogout}
                  /> }
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

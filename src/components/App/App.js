import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Main loggedIn={loggedIn} /> } />
        <Route path='/movies' element={ <Movies /> } />
        <Route path='/saved-movies' element={ <SavedMovies /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/signin' element={ <Login /> } />
        <Route path='/signup' element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;

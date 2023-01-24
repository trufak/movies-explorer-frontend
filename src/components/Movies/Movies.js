import './Movies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import FilteredMovies from '../FilteredMovies/FilteredMovies';

const Movies = ({ loggedIn }) => {

  const [localDataMovies, setLocalDataMovies] = useState({});

  useEffect(()=>{
    setLocalDataMovies({
      allMovies: JSON.parse(localStorage.getItem('allMovies')),
      findText: localStorage.getItem('findMoviesText'),
      isChortMovies: JSON.parse(localStorage.getItem('isChortMovies')),
    });
  },[]);

  /* Обработчик нажатия кнопки поиска */
  const handleFindMovie = (findValue) => {
    if (localDataMovies.allMovies) {
      localStorage.setItem('findMoviesText', findValue);
      localStorage.setItem('isChortMovies', localDataMovies.isChortMovies);
      setLocalDataMovies({
        ...localDataMovies,
        findText: findValue,
      });
    } else {
      return moviesApi.getMovies()
      .then((data)=>{
        localStorage.setItem('allMovies', JSON.stringify(data));
        localStorage.setItem('findMoviesText', findValue);
        localStorage.setItem('isChortMovies', localDataMovies.isChortMovies);
        setLocalDataMovies({
          allMovies: data,
          findText: findValue,
        });
      })
    }
  };

  const handleChangeIsChortMovie = (isChortMovies) => {
    setLocalDataMovies({
      ...localDataMovies,
      isChortMovies: isChortMovies,
    });
  };

  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <main>
        <FilteredMovies
          localDataMovies={localDataMovies}
          onChangeIsChortMovie={handleChangeIsChortMovie}
          onFindMovie={handleFindMovie}
          isSavedClass='moviesCard__save-button_isSaved'
        />
      </main>
      <Footer />
    </div>
  )
};

export default Movies;

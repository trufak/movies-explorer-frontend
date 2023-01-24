import './Movies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { filterMovies } from '../../utils/filterMovies';


const Movies = ({ loggedIn }) => {

  const [localDataMovies, setLocalDataMovies] = useState({});
  const [findMovies, setFindMovies] = useState([]);
  const [resultContent, setResultContent] = useState((<></>));
  const [moviesCount, setMoviesCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const [findValue, setFindValue] = useState('');

  useEffect(()=>{
    setInitialMoviesCount();
    setFindValue(localStorage.getItem('findMoviesText'));
    setLocalDataMovies({
      allMovies: JSON.parse(localStorage.getItem('allMovies')),
      findText: localStorage.getItem('findMoviesText'),
      isChortMovies: JSON.parse(localStorage.getItem('isChortMovies')),
    });
  },[]);

  /* Определение начального количества карточек */
  const setInitialMoviesCount = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1271)  {
      setMoviesCount(12);
    } else if (windowWidth < 1271 | windowWidth >= 768) {
      setMoviesCount(8);
    } else if (windowWidth < 768) {
      setMoviesCount(5);
    }
  };

  /* Фильтрация фильмов после изменения всех фильмов */
  useEffect(()=>{
    if (localDataMovies.allMovies) {
      if (localDataMovies.allMovies.length>0) {
        filterLocalMovies();
      }
    }
  },[localDataMovies]);

  /* Фильтрация фильмов */
  const filterLocalMovies = () => {
    setResultContent((<Preloader />));
    const fMovies = filterMovies(
      localDataMovies.allMovies,
      localDataMovies.findText,
      localDataMovies.isChortMovies,
    )
    if (fMovies.length > 0) {
      setFindMovies(fMovies);
    } else {
      setResultContent((
        <h1 className='movies__result-text'>Ничего не найдено</h1>
      ));
    }
  };

  /* Отображение фильмов при изменении массива отфильтрованных фильмов */
  useEffect(()=>{
    const renderMovies = findMovies.slice(0,moviesCount);
    setMovies(renderMovies);
  },[findMovies, moviesCount]);

  /* Обновление блока результатов при обновлении отфильтрованных фильмов */
  useEffect(()=>{
    if (movies.length>0) {
      setResultContent((
        <MoviesCardList
          movies={movies}
          isSavedClass='moviesCard__save-button_isSaved'
          isMoreButton={movies.length<findMovies.length}
          baseUrlImage={'https://api.nomoreparties.co'}
          addFilms={handleAddFilms}
        />
      ));
    };
  },[movies, findMovies]);

  /* Обработчик нажатия кнопки поиска */
  const handleFindMovie = () => {
    setResultContent((<Preloader />));
    if (localDataMovies.allMovies) {
      localStorage.setItem('findMoviesText', findValue);
      localStorage.setItem('isChortMovies', localDataMovies.isChortMovies);
      setLocalDataMovies({
        ...localDataMovies,
        findText: findValue,
      });
    } else {
      moviesApi.getMovies()
      .then((data)=>{
        localStorage.setItem('allMovies', JSON.stringify(data));
        localStorage.setItem('findMoviesText', findValue);
        localStorage.setItem('isChortMovies', localDataMovies.isChortMovies);
        setLocalDataMovies({
          allMovies: data,
          findText: findValue,
        });
      })
      .catch((error)=>{
        setResultContent((
          <h1 className='movies__result-text' >
            Во время запроса произошла ошибка. Возможно, проблема
            с соединением или сервер недоступен. Подождите немного и
            попробуйте еще раз
          </h1>
        ));
        console.log(error);
      });
    }
  };

  /* Добавление фильмов кнопкой ещё */
  const handleAddFilms = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1271)  {
      setMoviesCount(moviesCount + 3);
    } else if (windowWidth < 1271 | windowWidth >= 768) {
      setMoviesCount(moviesCount + 2);
    } else if (windowWidth < 768) {
      setMoviesCount(moviesCount + 2);
    }
  };

  const handleChangeFindValue = (findValue) => {
    setFindValue(findValue);
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
        <SearchForm
          findValue = {findValue}
          onChangeFindValue = {handleChangeFindValue}
          isValid = {findValue}
          onSubmit={handleFindMovie}
          isChortMovie = {localDataMovies.isChortMovies}
          onChangeIsChortMovie = {handleChangeIsChortMovie}
        />
        {
          resultContent
        }
      </main>
      <Footer />
    </div>
  )
};

export default Movies;

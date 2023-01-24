import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesResultContent from '../MoviesResultContent/MoviesResultContent';
import { getMoviesCount, addMoviesCount } from '../../utils/moviesCount';
import { filterMovies } from '../../utils/filterMovies';

const FilteredMovies = ({
  localDataMovies,
  onChangeIsChortMovie,
  onFindMovie,
  isSavedClass,
  noValidationSearchRow
}) => {

  const [findValue, setFindValue] = useState('');
  const [moviesCount, setMoviesCount] = useState(0);
  const [typeContent, setTypeContent] = useState('');
  const [findMovies, setFindMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    setInitialMoviesCount();
    setFindValue(localStorage.getItem('findMoviesText'));
  },[]);

  /* Определение начального количества карточек */
  const setInitialMoviesCount = () => {
    setMoviesCount(getMoviesCount());
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
    setTypeContent('preloader');
    const fMovies = filterMovies(
      localDataMovies.allMovies,
      localDataMovies.findText,
      localDataMovies.isChortMovies,
    )
    if (fMovies.length > 0) {
      setFindMovies(fMovies);
    } else {
      setTypeContent('notFound');
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
      setTypeContent('movies');
    };
  },[movies, findMovies]);

  /* Добавление фильмов кнопкой ещё */
  const handleAddFilms = () => {
    setMoviesCount(addMoviesCount(moviesCount));
  };

  const handleChangeFindValue = (findValue) => {
    setFindValue(findValue);
  };

  const handleChangeIsChortMovie = (isChortMovies) => {
    onChangeIsChortMovie(isChortMovies);
  };

  const handleFindMovie = () => {
    setTypeContent('preloader');
    onFindMovie(findValue)
    .catch((error)=>{
      setTypeContent('serverError');
      console.log(error);
    });
  };

  return (
    <div>
      <SearchForm
        findValue = {findValue}
        onChangeFindValue = {handleChangeFindValue}
        isValid = {findValue | noValidationSearchRow}
        onSubmit={handleFindMovie}
        isChortMovie = {localDataMovies.isChortMovies}
        onChangeIsChortMovie = {handleChangeIsChortMovie}
      />
      <MoviesResultContent
        typeContent={typeContent}
        movies={movies}
        findMovies={findMovies}
        isSavedClass={isSavedClass}
        baseUrlImage={'https://api.nomoreparties.co'}
        handleAddFilms={handleAddFilms}
      />
    </div>
  )
}

export default FilteredMovies;

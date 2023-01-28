import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesResultContent from "../MoviesResultContent/MoviesResultContent";
import { getMoviesCount, addMoviesCount } from "../../utils/moviesCount";

const FilteredMovies = ({
  localDataMovies,
  onChangeIsChortMovie,
  onFindMovie,
  isSavedClass,
  noValidationSearchRow,
  onSaveMovie,
  onUnSaveMovie,
  savedMovies,
  keyMovie,
  onGetUrlImage,
}) => {
  const [findValue, setFindValue] = useState("");
  const [moviesCount, setMoviesCount] = useState(0);
  const [typeContent, setTypeContent] = useState("");
  const [findMovies, setFindMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setInitialMoviesCount();
    setFindValue(localDataMovies.findText);
    if (localDataMovies.allMovies) {
      if (localDataMovies.allMovies.length > 0) {
        filterLocalMovies();
      }
    }
  }, [localDataMovies]);

  /* Определение начального количества карточек */
  const setInitialMoviesCount = () => {
    setMoviesCount(getMoviesCount());
  };

  const filterMovies = (movies, findName, isChort) => {
    const regexp = new RegExp(findName, "i");
    const fMovies = movies.filter(
      (movie) =>
        regexp.test(movie.nameRU) | regexp.test(movie.nameEN) &&
        checkIsChortMovie(movie, isChort)
    );
    return fMovies;
  };

  const checkIsChortMovie = (movie, isChort) => {
    if (isChort) {
      return movie.duration <= 40;
    }
    return true;
  };

  /* Фильтрация фильмов */
  const filterLocalMovies = () => {
    setTypeContent("preloader");
    const fMovies = filterMovies(
      localDataMovies.allMovies,
      localDataMovies.findText,
      localDataMovies.isChortMovies
    );
    if (fMovies.length > 0) {
      setFindMovies(fMovies);
    } else {
      setTypeContent("notFound");
    }
  };

  /* Отображение фильмов при изменении массива отфильтрованных фильмов */
  useEffect(() => {
    const renderMovies = findMovies.slice(0, moviesCount);
    setMovies(renderMovies);
  }, [findMovies, moviesCount]);

  /* Обновление блока результатов при обновлении отфильтрованных фильмов */
  useEffect(() => {
    if (movies.length > 0) {
      setTypeContent("movies");
    }
  }, [movies, findMovies]);

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
    setTypeContent("preloader");
    onFindMovie(findValue).catch((error) => {
      setTypeContent("serverError");
      console.log(error);
    });
  };

  return (
    <div>
      <SearchForm
        findValue={findValue}
        onChangeFindValue={handleChangeFindValue}
        isValid={findValue || noValidationSearchRow}
        onSubmit={handleFindMovie}
        isChortMovie={localDataMovies.isChortMovies}
        onChangeIsChortMovie={handleChangeIsChortMovie}
      />
      <MoviesResultContent
        typeContent={typeContent}
        movies={movies}
        findMovies={findMovies}
        isSavedClass={isSavedClass}
        handleAddFilms={handleAddFilms}
        onSaveMovie={onSaveMovie}
        onUnSaveMovie={onUnSaveMovie}
        savedMovies={savedMovies}
        keyMovie={keyMovie}
        onGetUrlImage={onGetUrlImage}
      />
    </div>
  );
};

export default FilteredMovies;

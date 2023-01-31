import "./SavedMovies.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilteredMovies from "../FilteredMovies/FilteredMovies";

const SavedMovies = ({ loggedIn, savedMovies, onUnSaveMovie }) => {

  const [localDataMovies, setLocalDataMovies] = useState({});

  useEffect(() => {
    setLocalDataMovies({
      allMovies: savedMovies,
      findText: "",
      isChortMovies: false,
    });
  }, [savedMovies]);

  const handleGetUrlImage = (movie) => {
    return movie.image;
  };

  const handleChangeIsChortMovie = (isChortMovies) => {
    setLocalDataMovies({
      ...localDataMovies,
      isChortMovies: isChortMovies,
    });
  };

  /* Обработчик нажатия кнопки поиска */
  const handleFindMovie = (findValue) => {
    setLocalDataMovies({
      ...localDataMovies,
      findText: findValue,
    });
    return Promise.resolve();
  };

  return (
    <div className="saved-movies">
      <Header loggedIn={loggedIn} />
      <main>
        <FilteredMovies
          noValidationSearchRow={true}
          localDataMovies={localDataMovies}
          isSavedClass="moviesCard__save-button_delete"
          onUnSaveMovie={onUnSaveMovie}
          savedMovies={savedMovies}
          keyMovie="movieId"
          onGetUrlImage={handleGetUrlImage}
          onChangeIsChortMovie={handleChangeIsChortMovie}
          onFindMovie={handleFindMovie}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SavedMovies;

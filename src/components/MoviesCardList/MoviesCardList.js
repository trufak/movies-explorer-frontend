import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  movies,
  isSavedClass,
  isMoreButton,
  addFilms,
  onSaveMovie,
  onUnSaveMovie,
  savedMovies,
  keyMovie,
  onGetUrlImage,
}) => {
  return (
    <div className="moviesCardList">
      <ul className="moviesCardList__container">
        {movies.map((movie) => (
          <MoviesCard
            key={movie[keyMovie]}
            movie={movie}
            isSavedClass={isSavedClass}
            onSaveMovie={onSaveMovie}
            onUnSaveMovie={onUnSaveMovie}
            savedMovies={savedMovies}
            onGetUrlImage={onGetUrlImage}
          />
        ))}
      </ul>
      {isMoreButton && (
        <button
          className="moviesCardList__button"
          type="button"
          onClick={addFilms}
        >
          Ещё
        </button>
      )}
    </div>
  );
};

export default MoviesCardList;

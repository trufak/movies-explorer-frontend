/* eslint-disable jsx-a11y/anchor-has-content */
import "./MoviesCard.css";
import { useState, useEffect } from "react";

const MoviesCard = ({
  movie,
  isSavedClass,
  onSaveMovie,
  onUnSaveMovie,
  savedMovies,
  onGetUrlImage,
}) => {
  const [savedMovie, setSavedMovie] = useState(undefined);
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    setUrlImage(onGetUrlImage(movie));
  }, []);

  useEffect(() => {
    checkIsSaved();
  }, [savedMovies]);

  const checkIsSaved = () => {
    if (movie._id) {
      setSavedMovie(movie);
    } else {
      setSavedMovie(savedMovies.find((sMovie) => sMovie.movieId === movie.id));
    }
  };

  const handleClickSaved = () => {
    if (!savedMovie) {
      onSaveMovie({
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: urlImage,
        trailerLink: movie.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      }).catch((err) => console.log(err));
    } else {
      onUnSaveMovie(savedMovie._id).catch((err) => console.log(err));
    }
  };

  return (
    <div className="moviesCard">
      <div className="moviesCard__about">
        <span className="moviesCard__name">{movie.nameRU}</span>
        <span className="moviesCard__time">{`${movie.duration} минут`}</span>
      </div>
      <a
        className="moviesCard__trailer-link"
        href={movie.trailerLink}
        style={{ backgroundImage: `url(${urlImage})` }}
        target="_blank"
        rel="noreferrer"
      />
      <button
        className={`
          moviesCard__save-button
          ${savedMovie ? isSavedClass : ""}
        `}
        type="button"
        onClick={handleClickSaved}
      >
        {`${savedMovie ? "" : "Сохранить"}`}
      </button>
    </div>
  );
};

export default MoviesCard;

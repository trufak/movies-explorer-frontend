import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const MoviesResultContent = ({
  typeContent,
  movies,
  isSavedClass,
  findMovies,
  handleAddFilms,
  onSaveMovie,
  onUnSaveMovie,
  savedMovies,
  keyMovie,
  onGetUrlImage,
}) => {

  const renderContent = () => {
    if (typeContent === 'movies') {
      return ( <MoviesCardList
        movies={movies}
        isSavedClass={isSavedClass}
        isMoreButton={movies.length<findMovies.length}
        addFilms={handleAddFilms}
        onSaveMovie={onSaveMovie}
        onUnSaveMovie={onUnSaveMovie}
        savedMovies={savedMovies}
        keyMovie={keyMovie}
        onGetUrlImage={onGetUrlImage}
      /> )
    } else if (typeContent === 'preloader') {
      return  (<Preloader />)
    } else if (typeContent === 'notFound') {
      return ( <h1 className='movies__result-text'>Ничего не найдено</h1>)
    } else if (typeContent === 'serverError') {
      return  (<h1 className='movies__result-text' >
          Во время запроса произошла ошибка. Возможно, проблема
          с соединением или сервер недоступен. Подождите немного и
          попробуйте еще раз
        </h1>)
    }
  };

  return (
    <div>
      { renderContent() }
    </div>
  )
}

export default MoviesResultContent;

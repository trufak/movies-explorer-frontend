import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const MoviesResultContent = ({
  typeContent,
  movies,
  isSavedClass,
  findMovies,
  handleAddFilms,
  baseUrlImage,
}) => {

  const renderContent = () => {
    if (typeContent === 'movies') {
      return ( <MoviesCardList
        movies={movies}
        isSavedClass={isSavedClass}
        isMoreButton={movies.length<findMovies.length}
        baseUrlImage={baseUrlImage}
        addFilms={handleAddFilms}
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

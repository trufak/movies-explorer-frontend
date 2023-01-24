import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
  movies,
  isSavedClass,
  isMoreButton,
  baseUrlImage,
  addFilms
}) => {
  return (
    <div className='moviesCardList'>
      <ul className='moviesCardList__container'>
      {
        movies.map((movie)=>
          <MoviesCard
            key={movie.id}
            movie={movie}
            isSavedClass={isSavedClass}
            baseUrlImage={baseUrlImage}
          />
        )
      }
      </ul>
      {
        isMoreButton &&
          <button
            className='moviesCardList__button'
            type='button'
            onClick={addFilms}
          >
            Ещё
          </button>
      }

    </div>
  )
}

export default MoviesCardList;

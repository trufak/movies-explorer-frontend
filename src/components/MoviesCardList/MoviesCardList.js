import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, isSavedClass, isMoreButton}) => {
  return (
    <div className='moviesCardList'>
      <ul className='moviesCardList__container'>
      {
        movies.map((movie)=>
          <MoviesCard
            key={movie._id}
            movie={movie}
            isSavedClass={isSavedClass}
          />
        )
      }
      </ul>
      {
        isMoreButton &&
          <button className='moviesCardList__button'>Ещё</button>
      }

    </div>
  )
}

export default MoviesCardList;

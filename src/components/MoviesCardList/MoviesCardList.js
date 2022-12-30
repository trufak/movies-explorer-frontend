import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, isSavedClass, unsavedLock = false }) => {
  return (
    <div className='MoviesCardList'>
      <ul className='MoviesCardList__container'>
      {
        movies.map((movie)=>
          <MoviesCard
            key={movie._id}
            movie={movie}
            isSavedClass={isSavedClass}
            unsavedLock={unsavedLock}
          />
        )
      }
      </ul>
      <button className='MoviesCardList__button'>Ещё</button>
    </div>
  )
}

export default MoviesCardList;

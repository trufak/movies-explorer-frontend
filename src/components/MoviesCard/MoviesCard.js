import './MoviesCard.css';
import { useState } from 'react';

const MoviesCard = ({ movie, isSavedClass }) => {

  const [isSaved, setIsSaved] = useState(movie.isSaved);

  const handleClickSaved = () => {
    if (!isSaved) setIsSaved(true);
  };

  return (
    <div className='moviesCard'>
      <div className='moviesCard__about'>
        <span className='moviesCard__name'>{movie.name}</span>
        <span className='moviesCard__time'>{`${movie.duration} минут`}</span>
      </div>
      <img
        className='moviesCard__mask'
        src={movie.image}
        alt={movie.name}
      />
      <button
        className={`
          moviesCard__save-button
          ${isSaved ? isSavedClass : ''}`}
        type='button'
        onClick={handleClickSaved}
      >
        {`${isSaved ? '' : 'Сохранить'}`}
      </button>
    </div>
  );
};

export default MoviesCard;

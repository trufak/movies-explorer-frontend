import './MoviesCard.css';
import { useState } from 'react';

const MoviesCard = ({ movie, isSavedClass, baseUrlImage }) => {

  const [isSaved, setIsSaved] = useState(movie.isSaved);

  const handleClickSaved = () => {
    if (!isSaved) setIsSaved(true);
  };

  return (
    <div className='moviesCard'>
      <div className='moviesCard__about'>
        <span className='moviesCard__name'>{movie.nameRU}</span>
        <span className='moviesCard__time'>{`${movie.duration} минут`}</span>
      </div>
      <img
        className='moviesCard__mask'
        src={`${baseUrlImage}${movie.image.url}`}
        alt={movie.image.name}
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

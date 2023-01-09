import './MoviesCard.css';
import { useState } from 'react';

const MoviesCard = ({ movie, isSavedClass, unsavedLock }) => {

  const [isSaved, setIsSaved] = useState(false);

  const handleClickSaved = () => {
    if (!isSaved) setIsSaved(true);
    else {
      if (!unsavedLock) setIsSaved(false);
    }
  };

  return (
    <div className='MoviesCard'>
      <div className='MoviesCard__about'>
        <span className='MoviesCard__name'>{movie.name}</span>
        <span className='MoviesCard__time'>{`${movie.duration} минут`}</span>
      </div>
      <img
        className='MoviesCard__mask'
        src={movie.image}
        alt={movie.name}
      />
      <button
        className={`
          MoviesCard__save-button
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

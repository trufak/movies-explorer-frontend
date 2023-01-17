import './SearchForm.css';
import { useState } from 'react';

const SearchForm = () => {
  const [isChortFilm, setIsShortFilm] = useState(false);

  const changeShortFilm = () => {
    setIsShortFilm(!isChortFilm);
  }

  return (
    <form className='searchForm'>
      <div className='searchForm__search-row'>
        <input
          className='searchForm__input'
          type='text'
          placeholder='Фильм' />
        <button type='submit' className='searchForm__search-button' />
      </div>
      <div className='searchForm__chortfilm'>
        <div className='searchForm__chortfilm-content'>
          <button
              type='button'
              className={`
                searchForm__chortfilm-button
                ${isChortFilm ? 'searchForm__chortfilm-button_true' : ''}
              `}
              onClick={changeShortFilm}
            >
              <div className='searchForm__chortfilm-circle' />
          </button>
          <span>Короткометражки</span>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

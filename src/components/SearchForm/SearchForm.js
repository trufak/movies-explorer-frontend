import './SearchForm.css';
import { useState } from 'react';

const SearchForm = () => {
  const [isChortFilm, setIsShortFilm] = useState(false);

  const changeShortFilm = () => {
    setIsShortFilm(!isChortFilm);
  }

  return (
    <form className='SearchForm'>
      <div className='SearchForm__search-row'>
        <input
          className='SearchForm__input'
          type='text'
          placeholder='Фильм' />
        <button type='submit' className='SearchForm__search-button' />
      </div>
      <div className='SearchForm__chortfilm'>
        <div className='SearchForm__chortfilm-content'>
          <button
              type='button'
              className={`
                SearchForm__chortfilm-button
                ${isChortFilm ? 'SearchForm__chortfilm-button_true' : ''}
              `}
              onClick={changeShortFilm}
            >
              <div className='SearchForm__chortfilm-circle' />
          </button>
          <span>Короткометражки</span>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

import './SearchForm.css';
import { useState, useEffect } from 'react';

const SearchForm = ({
  findValue,
  onChangeFindValue,
  onSubmit,
  isValid,
  isChortMovie,
  onChangeIsChortMovie,
}) => {

  const changeShortFilm = () => {
    onChangeIsChortMovie(!isChortMovie);
  };

  const changeFindValue = (event) => {
    onChangeFindValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form
      className='searchForm'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='searchForm__search-row'>
        <input
          className='searchForm__input'
          type='text'
          placeholder='Фильм'
          name='find'
          value={findValue || ''}
          onChange={changeFindValue}
          required
        />
        <button
          className={`
            button
            searchForm__search-button
            ${!isValid ? 'searchForm__search-button_disabled' : ''}
          `}
          type='submit'
          disabled={!isValid}/>
      </div>
      <p className = 'searchForm__error-input'>
        {!isValid
        ? 'Нужно ввести ключевое слово'
        : ''}
      </p>
      <div className='searchForm__chortfilm'>
        <div className='searchForm__chortfilm-content'>
          <button
              type='button'
              name='isChortMovie'
              value={isChortMovie}
              className={`
                button
                searchForm__chortfilm-button
                ${isChortMovie ? 'searchForm__chortfilm-button_true' : ''}
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

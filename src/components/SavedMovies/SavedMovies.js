import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesData from '../../utils/moviesData';
import Footer from '../Footer/Footer';

const SavedMovies = ({loggedIn}) => {

  const [savedMovies, setSavedMovies] = useState(moviesData);

  return (
    <div className='Movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        isSavedClass='MoviesCard__save-button_delete'
      />
      <Footer />
    </div>
  )
};

export default SavedMovies;

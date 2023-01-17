import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMoviesData from '../../utils/savedMoviesData';
import Footer from '../Footer/Footer';

const SavedMovies = ({loggedIn}) => {

  const [savedMovies, setSavedMovies] = useState(savedMoviesData);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList
          movies={savedMovies}
          isSavedClass='moviesCard__save-button_delete'
        />
      </main>
      <Footer />
    </div>
  )
};

export default SavedMovies;

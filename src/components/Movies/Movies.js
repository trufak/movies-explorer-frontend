import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesData from '../../utils/moviesData';
import Footer from '../Footer/Footer';

const Movies = ({ loggedIn }) => {

  const [movies, setMovies] = useState(moviesData);

  return (
    <div className='Movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isSavedClass='MoviesCard__save-button_isSaved'
        unsavedLock={true}
      />
      <Footer />
    </div>
  )
};

export default Movies;

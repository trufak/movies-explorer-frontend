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
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList
          movies={movies}
          isSavedClass='moviesCard__save-button_isSaved'
          isMoreButton={true}
        />
      </main>
      <Footer />
    </div>
  )
};

export default Movies;

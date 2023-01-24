import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FilteredMovies from '../FilteredMovies/FilteredMovies';

const SavedMovies = ({loggedIn}) => {

  /* const [savedMovies, setSavedMovies] = useState(savedMoviesData); */

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main>
        <FilteredMovies
          noValidationSearchRow = {true}
          />
      </main>
      <Footer />
    </div>
  )
};

export default SavedMovies;

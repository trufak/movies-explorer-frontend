const filterMovies = (movies, findName, isChort) => {
  const regexp = new RegExp(findName, 'i');
  const fMovies = movies.filter((movie)=>
    (regexp.test(movie.nameRU) | regexp.test(movie.nameEN))
    && checkIsChortMovie(movie, isChort)
  );
  return fMovies;
}

const checkIsChortMovie = (movie, isChort) => {
  if (isChort) {
    return movie.duration<=40;
  }
  return true;
};

export {filterMovies};

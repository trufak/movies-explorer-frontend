import {
  widthDesctop,
  widthTablet,
  countMoviesDesctop,
  countMoviesTablet,
  countMoviesMobile,
  countAddMoviesDesctop,
  countAddMoviesTablet,
  countAddMoviesMobile
} from "../utils/constants";

const getMoviesCount = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= widthDesctop)  {
    return countMoviesDesctop;
  } else if (windowWidth < widthDesctop | windowWidth >= widthTablet) {
    return countMoviesTablet;
  } else if (windowWidth < widthTablet) {
    return countMoviesMobile;
  }
};

const addMoviesCount = (moviesCount) => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= widthDesctop)  {
    return (moviesCount + countAddMoviesDesctop);
  } else if (windowWidth < widthDesctop | windowWidth >= widthTablet) {
    return (moviesCount + countAddMoviesTablet);
  } else if (windowWidth < widthTablet) {
    return (moviesCount + countAddMoviesMobile);
  }
};

export {
  getMoviesCount,
  addMoviesCount,
}

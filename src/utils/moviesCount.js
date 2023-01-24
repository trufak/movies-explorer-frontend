const getMoviesCount = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1271)  {
    return 12;
  } else if (windowWidth < 1271 | windowWidth >= 768) {
    return 8;
  } else if (windowWidth < 768) {
    return 5;
  }
};

const addMoviesCount = (moviesCount) => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1271)  {
    return (moviesCount + 3);
  } else if (windowWidth < 1271 | windowWidth >= 768) {
    return (moviesCount + 2);
  } else if (windowWidth < 768) {
    return (moviesCount + 2);
  }
};

export {
  getMoviesCount,
  addMoviesCount,
}

class MoviesApi {
  constructor ({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getMovies () {
    return fetch(this.baseUrl)
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;

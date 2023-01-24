class MainApi {
  constructor ({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getMovies () {
    return fetch(this.baseUrl + '/movies')
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

}

const moviesApi = new MainApi({
  baseUrl: 'https://api.diplom.trufakin.nomoredomains.club'
});

export default moviesApi;

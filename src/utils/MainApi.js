class MainApi {
  constructor ({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  /* Получить сохраненные фильмы */
  getMovies () {
    return fetch(this.baseUrl + '/movies',{
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Сохранение фильма */
  saveMovie (movie) {
    return fetch(this.baseUrl + '/movies',{
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(movie),
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Удаление фильма из сохраненных фильмов */
  unSaveMovie (movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`,{
      method: 'DELETE',
      headers: this.headers,
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Регистрация */
  signup (values) {
    return fetch(this.baseUrl + '/signup',{
      method: 'POST',
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Авторизация */
  signin (values) {
    return fetch(this.baseUrl + '/signin',{
      method: 'POST',
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Получение данных пользователя */
  getUser () {
    return fetch(this.baseUrl + '/users/me',{
      headers: this.headers
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  /* Обновление данных пользователя */
  updateUser (user) {
    return fetch(this.baseUrl + '/users/me',{
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(user),
    })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }


}

const mainApi = new MainApi({
/*   baseUrl: 'https://api.diplom.trufakin.nomoredomains.club' */
  baseUrl: 'http://localhost:3001'
});

export default mainApi;

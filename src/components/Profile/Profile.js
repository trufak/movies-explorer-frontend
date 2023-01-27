import "./Profile.css";
import { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({ loggedIn, onUpdateUser, onLogout }) => {
  const {
    values,
    handleChange,
    isValid,
    setValues,
  } = useFormAndValidation();
  const [attentionText, setAttentionText] = useState({
    text: "",
    status: true,
  });
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
    });
  }, []);

  useEffect(() => {
    if (isValid) setAttentionText({ text: "", status: true });
    else
      setAttentionText({
        text: "Введены некорректные данные!",
        status: false,
      });
  }, [isValid, values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAttentionText("");
    onUpdateUser(values)
      .then(() => {
        setAttentionText({
          text: "Данные успешно обновлены!",
          status: true,
        });
      })
      .catch(() => {
        setAttentionText({
          text: "Что-то пошло не так...Попробуйте ещё раз!",
          status: false,
        });
      });
  };

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <ul className="profile__inputs">
            <li className="profile__input-container">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                id="name"
                name="name"
                placeholder="Имя"
                value={values.name || ""}
                onChange={handleChange}
                required
                pattern="[a-zA-Zа-яА-Я\-\s]+"
              />
            </li>
            <li className="profile__input-container">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile__input"
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={values.email || ""}
                onChange={handleChange}
              />
            </li>
          </ul>
          <p
            className={`
            profile__attentionText
            ${attentionText.status ? "" : "profile__attentionText_error"}`}
          >
            {attentionText.text}
          </p>
          <button
            type="submit"
            className={`
              button
              profile__submit-button
              ${
                !isValid || user.name === values.name
                  ? "profile__submit-button_disabled"
                  : ""
              }
            `}
            disabled={!isValid}
          >
            Редактировать
          </button>
        </form>
        <button
          type="button"
          className="button profile__exit-button"
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </main>
    </div>
  );
};

export default Profile;

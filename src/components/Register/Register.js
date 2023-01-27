import "./Register.css";
import { useState } from "react";
import SignForm from "../SignForm/SignForm";
import mainApi from "../../utils/MainApi";

const Register = ({ onRegister }) => {
  const [apiError, setApiError] = useState(false);

  const handleSubmit = (values) => {
    setApiError(false);
    onRegister(values).catch(() => {
      setApiError(true);
    });
  };

  return (
    <SignForm
      title="Добро пожаловать!"
      inputs={[
        {
          name: "name",
          label: "Имя",
          type: "text",
          required: true,
          pattern: "[a-zA-Zа-яА-Я\\-\\s]+",
        },
        {
          name: "email",
          label: "E-mail",
          type: "email",
          required: true,
        },
        {
          name: "password",
          label: "Пароль",
          type: "password",
          required: true,
        },
      ]}
      textButton="Зарегистрироваться"
      captionAfterLink="Уже зарегистрированы?"
      linkText="Войти"
      pathLink="/signin"
      onSubmit={handleSubmit}
      apiError={apiError}
    />
  );
};

export default Register;

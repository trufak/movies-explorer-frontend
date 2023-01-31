import { useState } from "react";
import SignForm from "../SignForm/SignForm";

const Login = ({ onLogin }) => {
  const [apiError, setApiError] = useState(false);

  const handleSubmit = (values) => {
    setApiError(false);
    onLogin(values).catch(() => {
      setApiError(true);
    });
  };

  return (
    <SignForm
      title="Рады видеть!"
      inputs={[
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
      textButton="Войти"
      captionAfterLink="Еще не зарегистрированы?"
      linkText="Регистрация"
      pathLink="/signup"
      onSubmit={handleSubmit}
      apiError={apiError}
    />
  );
};

export default Login;

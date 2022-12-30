import SignForm from "../SignForm/SignForm";

const Login = () => {
  return (
    <SignForm
    title='Рады видеть!'
    inputs={[
      {
        name: 'E-mail',
        type: 'email',
      },
      {
        name: 'Пароль',
        type: 'password',
      },
    ]}
    textButton='Войти'
    captionAfterLink='Еще не зарегистрированы?'
    linkText='Регистрация'
    pathLink='/signup'
  />
  )
};

export default Login;

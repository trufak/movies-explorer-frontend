import './Register.css'
import SignForm from '../SignForm/SignForm';

const Register = () => {
  return (
    <SignForm
      title='Добро пожаловать!'
      inputs={[
        {
          name: 'Имя',
          type: 'text',
        },
        {
          name: 'E-mail',
          type: 'email',
        },
        {
          name: 'Пароль',
          type: 'password',
        },
      ]}
      textButton='Зарегистрироваться'
      captionAfterLink='Уже зарегистрированы?'
      linkText='Войти'
      pathLink='/signin'
    />
  )
};

export default Register;

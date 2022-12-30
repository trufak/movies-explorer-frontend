import './Profile.css';
import { useEffect } from 'react';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = ({loggedIn, user, updateUser}) => {

  const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation();

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
    });
  }, []);

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
    });
  }, [user]);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <div className='Profile'>
        <h1 className='Profile__title'>
          {`Привет, ${user.name}!`}
        </h1>
        <form className='Profile__form'>
          <ul className='Profile__inputs'>
            <li className='Profile__input-container'>
              <label
                className='Profile__label'
                for='name'
              >
                Имя
              </label>
              <input
                className='Profile__input'
                type='text'
                id='name'
                value={values.name}
                onChange={handleChange}
              />
            </li>
            <li className='Profile__input-container'>
              <label
                className='Profile__label'
                for='email'
              >
                E-mail
              </label>
              <input
                className='Profile__input'
                type='text'
                id='email'
                value={values.email}
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            type='submit'
            className='Profile__submit-button'
          >
            Редактировать
          </button>
        </form>
        <button
          type='button'
          className='Profile__exit-button'
        >
          Выйти из аккаунта
        </button>
      </div>
    </div>

  )
};

export default Profile;

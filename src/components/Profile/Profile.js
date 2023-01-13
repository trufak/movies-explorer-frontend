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
      <main className='profile'>
        <h1 className='profile__title'>
          {`Привет, ${user.name}!`}
        </h1>
        <form className='profile__form'>
          <ul className='profile__inputs'>
            <li className='profile__input-container'>
              <label
                className='profile__label'
                htmlFor='name'
              >
                Имя
              </label>
              <input
                className='profile__input'
                type='text'
                id='name'
                name='name'
                value={values.name || ''}
                onChange={handleChange}
              />
            </li>
            <li className='profile__input-container'>
              <label
                className='profile__label'
                htmlFor='email'
              >
                E-mail
              </label>
              <input
                className='profile__input'
                type='email'
                id='email'
                name='email'
                value={values.email || ''}
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            type='submit'
            className='button profile__submit-button'
          >
            Редактировать
          </button>
        </form>
        <button
          type='button'
          className='button profile__exit-button'
        >
          Выйти из аккаунта
        </button>
      </main>
    </div>

  )
};

export default Profile;

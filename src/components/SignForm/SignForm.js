import './SignForm.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';

const SignForm = ({
  title,
  inputs,
  textButton,
  captionAfterLink,
  linkText,
  pathLink,
  onSubmit,
  apiError
}) => {

  const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  }


  return (
    <main className='signForm'>
      <Logo />
      <h1 className='signForm__title'>{title}</h1>
      <form
        className='signForm__form'
        onSubmit={handleSubmit}
      >
        <ul className='signForm__inputs'>
          {
            inputs.map((input, index)=>{
              return (
                <li className='signForm__input-container' key={index}>
                  <label className='signForm__label'>{input.label}</label>
                  <input
                    className='signForm__input'
                    type={input.type}
                    name={input.name}
                    value={values[input.name] || ""}
                    placeholder={input.label}
                    onChange={handleChange}
                    required={input.required}
                    pattern={input.pattern}
                  />
                  <span className='signForm__error-input'>
                    {errors[input.name]}
                  </span>
                </li>
              )
            })
          }
        </ul>
        <p className='signForm__apiError'>
          {apiError ? 'Что-то пошло не так...Попробуйте ещё раз!' : ''}
        </p>
        <button
          className={`
            signForm__submit-button
            ${!isValid ? 'signForm__submit-button_disabled' : ''}
          `}
          type='submit'
          disabled={!isValid}
        >
          {textButton}
        </button>
      </form>
      <div className='signForm__link-container'>
        <span className='signForm__caption-link'>{captionAfterLink}</span>
        <Link className='signForm__link' to={pathLink}>{linkText}</Link>
      </div>
    </main>
  )
};

export default SignForm;

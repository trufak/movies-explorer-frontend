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
  pathLink
}) => {

  const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid} = useFormAndValidation();

  return (
    <main className='signForm'>
      <Logo />
      <h1 className='signForm__title'>{title}</h1>
      <form className='signForm__form'>
        <ul className='signForm__inputs'>
          {
            inputs.map((input, index)=>{
              return (
                <li className='signForm__input-container' key={index}>
                  <label className='signForm__label'>{input.name}</label>
                  <input
                    className='signForm__input'
                    type={input.type}
                    name={input.name}
                    value={values[input.name] || ""}
                    onChange={handleChange}
                  />
                  <span className='signForm__error-input'>
                    {errors[input.name]}
                  </span>
                </li>
              )
            })
          }
        </ul>
        <button
          className='signForm__submit-button'
          type='submit'
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

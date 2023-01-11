import './SignForm.css';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

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
    <div className='SignForm'>
      <img className='SignForm__logo' src={logo} alt='логотип' />
      <h1 className='SignForm__title'>{title}</h1>
      <form className='SignForm__form'>
        <ul className='SignForm__inputs'>
          {
            inputs.map((input, index)=>{
              return (
                <li className='SignForm__input-container' key={index}>
                  <label className='SignForm__label'>{input.name}</label>
                  <input
                    className='SignForm__input'
                    type={input.type}
                    name={input.name}
                    value={values[input.name] || ""}
                    onChange={handleChange}
                  />
                  <span className='SignForm__error-input'>
                    {errors[input.name]}
                  </span>
                </li>
              )
            })
          }
        </ul>
        <button
          className='SignForm__submit-button'
          type='submit'
        >
          {textButton}
        </button>
      </form>
      <div className='SignForm__link-container'>
        <span className='SignForm__caption-link'>{captionAfterLink}</span>
        <Link className='SignForm__link' to={pathLink}>{linkText}</Link>
      </div>
    </div>
  )
};

export default SignForm;

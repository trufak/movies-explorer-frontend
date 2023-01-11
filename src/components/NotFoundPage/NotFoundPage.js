import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='NotFoundPage'>
      <h1 className='NotFoundPage__title'>404</h1>
      <p className='NotFoundPage__subtitle'>Страница не найдена</p>
      <button
        className='NotFoundPage__back'
        onClick={goBack}
        >
        Назад
      </button>
    </div>
  )
}

export default NotFoundPage;

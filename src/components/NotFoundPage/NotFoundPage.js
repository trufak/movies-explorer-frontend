import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="notFoundPage">
      <h1 className="notFoundPage__title">404</h1>
      <p className="notFoundPage__subtitle">Страница не найдена</p>
      <button className="button notFoundPage__back" onClick={goBack}>
        Назад
      </button>
    </main>
  );
};

export default NotFoundPage;

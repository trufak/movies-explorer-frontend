import './Techs.css';

const Techs = () => {
  return (
    <div className='Techs'>
      <h2 className='title'>Технологии</h2>
      <h3 className='big-text Techs__subtitle'>7 Технологий</h3>
      <p className='text Techs__text'>На курсе веб-разработки мы освоили технологии,
      которые применили в дипломном проекте.</p>
      <ul className='Techs__technics'>
        <li className='Techs__technic'>
          <p className='text'>HTML</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>CSS</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>JS</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>React</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>Git</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>Express.js</p>
        </li>
        <li className='Techs__technic'>
          <p className='text'>mongoDB</p>
        </li>
      </ul>
    </div>
  );
};

export default Techs;

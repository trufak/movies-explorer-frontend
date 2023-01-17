import './Techs.css';

const Techs = () => {
  return (
    <section className='techs' id='techs'>
      <h2 className='title'>Технологии</h2>
      <h3 className='big-text techs__subtitle'>7 технологий</h3>
      <p className='text techs__text'>На курсе веб-разработки мы освоили технологии,
      которые применили в дипломном проекте.</p>
      <ul className='techs__technics'>
        <li className='techs__technic'>
          <p className='text'>HTML</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>CSS</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>JS</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>React</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>Git</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>Express.js</p>
        </li>
        <li className='techs__technic'>
          <p className='text'>mongoDB</p>
        </li>
      </ul>
    </section>
  );
};

export default Techs;

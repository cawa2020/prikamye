import './Intro.scss'

const Intro = () => {
  return (
    <section className="intro">
      <div className='intro-info'>
        <div className='intro-text'>
          <h1>Автомобильные грузоперевозки по России и СНГ</h1>
          <p className="subtitle">Оперативная доставка без задержек с гарантией безопасности и страхованием груза </p>
        </div>
        <div className="intro-buttons">
          <button className="primary-button big-size">Заказать</button>
          <button className="secondary-button big-size">Услуги</button>
        </div>
      </div>
      <video autoPlay muted loop src="final.mp4">
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default Intro 
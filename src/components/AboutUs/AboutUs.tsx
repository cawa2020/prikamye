import './AboutUs.scss'

const AboutUs = () => {
  return (
    <section className='about-us'>
      <h1 style={{ marginBottom: 60 }}>О компании «ТЭК Прикамье»</h1>
      <div className='about-us-text'>
        <p className="text-1">Транспортная компания ООО «ТЭК Прикамье», ежегодно перевозит грузы автопоездами более 500 тыс. тонн в год, по России и странам СНГ</p>
        <p className="text-1">Наш автопарк состоит из современных автомобилей европейского качества марок Volvo, Scania и Daf, а также новых седельных тягачей от китайского бренда FAW, находящихся в собственности компании</p>
      </div>
      <button style={{ marginTop: 40 }} className="primary-button normal-size">
        <span>Портфолио</span>
        <img src="arrow-right.png" alt="arrow-right" />
      </button>
      <img className="country-img" src="map.png" alt="" />
    </section>
  )
}

export default AboutUs 
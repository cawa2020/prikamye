import './index.scss'


function App() {
  const services = [{
    title: 'Автомобильные грузоперевозки',
    img: 'service1.jpg',
    link: '#'
  },
  {
    title: 'Авиаперевозки',
    img: 'service2.jpg',
    link: '#'
  },
  {
    title: 'Морские перевозки',
    img: 'service3.jpg',
    link: '#'
  },
  {
    title: 'Перевозки негабаритных грузов',
    img: 'service4.jpg',
    link: '#'
  },
  {
    title: 'Мультимодальные грузоперевозки',
    img: 'service5.jpg',
    link: '#'
  },
  {
    title: 'Перевозка контейнеров',
    img: 'service6.jpg',
    link: '#'
  },
  {
    title: 'Перевозка труб',
    img: 'service7.jpg',
    link: '#'
  },
  {
    title: 'Железнодорожные грузоперевозки',
    img: 'service1.jpg',
    link: '#'
  },
  {
    title: 'Собственный автосервис',
    img: 'service2.jpg',
    link: '#'
  }]

  const points = [
    {
      number: '01',
      title: 'Оставьте заявку на расчет',
      description: 'Сделать это можно, позвонив по телефону, либо оставив данные в форме на нашем сайте. Наш менеджер свяжется с Вами и предоставит все необходимые Вам расчеты, в нужном формате'
    },
    {
      number: '02',
      title: 'Обмен уставными документами, подписание договора',
      description: 'В зависимости от политики Вашей компании, подписание договора может занять от 1 дня до 3 месяцев. Если у Вас сложный порядок проверки поставщиков, стоит заранее подготовить все документы'
    },
    {
      number: '03',
      title: 'Обработка заявки, подбор транспорта',
      description: 'Вы сообщаете нам основные характеристики вашего груза: вес, объем, размеры, стоимость (для страховки). Мы предлагаем Вам один или несколько вариантов отправки груза. Как правило варианты это сроки погрузки, выгрузки, стоимость'
    },
    {
      number: '04',
      title: 'Оформление заявки',
      description: 'После того, как был выбран один из предложенных вариантов, мы оформляем заявку. Для заполнения нам от Вас потребуются: адрес погрузки, тел. контактного лица на погрузке, адрес выгрузки, тел. конт. лица на выгрузке. Заполненную заявку мы направляем Вам на согласование и подписание'
    },
    {
      number: '05',
      title: 'Машина встает под погрузку',
      description: 'После того как была подписана заявка на перевозку, в оговоренные в ней сроки, машина встает под погрузку'
    },
    {
      number: '06',
      title: 'Оплата перевозки',
      description: 'Когда машина будет погружена, мы направляем Вам счет, на согласованную в заявке сумму. Оплата должна пройти по факту погрузки машины, до момента выгрузки'
    },
    {
      number: '07',
      title: 'Груз доставлен',
      description: 'Машина выгружается, водитель подписывает транспортные и товарные накладные (перечень и кол-во, требуемых к возврату док. оговаривается и согласовывается в заявке)'
    },
    {
      number: '08',
      title: 'Отправка документов',
      description: 'Мы направляем в Ваш адрес оригиналы документов: договор (при первой перевозке), заявки, счета, УПД, ТТН, ТН'
    }
  ];

  return (
    <>
      <header>
        <img className='logo' src="logo.png" alt="" />
        <div className='right-side'>
          <nav>
            <a href="#services">Услуги</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <button className="call-button normal-size">
            <img src="phone-dark.png" alt="" />
            <span>Связаться</span>
          </button>
          <input type="checkbox" id="burger-checkbox" className="burger-checkbox " />
          <label className="burger" htmlFor="burger-checkbox"></label>
          <div className="menu">
            <ul className='menu-list'>
              <li><a href="#services" className="menu-list__item">Услуги</a></li>
              <li><a href="#portfolio" className="menu-list__item">Портфолио</a></li>
              <li><a href="#contacts" className="menu-list__item">Контакты</a></li>
            </ul>
            <div>
              <ul className='menu-contacts'>
                <li>
                  <img src="phone.png" alt="" />
                  <span className='text-1'>+ 7 3424 150 160</span>
                </li>
                <li>
                  <img src="phone.png" alt="" />
                  <span className='text-1'>+7495 308 3040 22 33</span>
                </li>
                <li>
                  <img src="mail.png" alt="" />
                  <span className='text-1'>office@prikame.ru</span>
                </li>
              </ul>
              <button className='big-size secondary-button'>Оставить заявку</button>
            </div>
          </div>
        </div>
      </header>

      <main>
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
          <video autoPlay muted loop src="final.mp4" >
            Your browser does not support the video tag.
          </video>
        </section>


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

        <section id='services' className='services'>
          <h2 style={{ marginBottom: 'var(--vertical-indent)', color: 'white' }}>Наши услуги</h2>
          <div className='services-items-container'>
            {services.map((service) =>
              <a href={service.link} className='service-item'>
                <img className='service-item__img' src={service.img} alt="" />
                <div className='service-item__info'>
                  <span className='service-title'>{service.title}</span>
                  <button className='icon-button'>
                    <img src="arrow-right.png" alt="" />
                  </button>
                </div>
              </a>
            )}
          </div>
        </section>

        <section className="how-we-work">
          <div className='left-side'>
            <h2 style={{ marginBottom: 'var(--vertical-indent)' }}>Как мы работаем</h2>
            <button className='primary-button big-size'>Оставить заявку</button>
            <img className='car-img' src="track.png" alt="track" />
          </div>
          <div className='points'>
            {points.map((point, index) =>
              <div className='point'>
                <span className='point-number'>
                  {point.number}
                </span>
                <div>
                  <span className='service-title' >{point.title}</span>
                  <p style={{ marginTop: 12 }}>{point.description}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App

import { services } from '../../data/services'
import Button from '../../shared/ui/Button/Button'
import './Services.scss'

const Services = () => {
  return (
    <section id='services' className='services'>
      <h2 style={{ marginBottom: 'var(--vertical-indent)', color: 'white' }}>
        Наши услуги
      </h2>
      <div className='services-items-container'>
        {services.map((service) => (
          <a key={service.title} href={service.link} className='service-item'>
            <img className='service-item__img' src={service.img} alt={service.title} />
            <div className='service-item__info'>
              <span className='service-title'>{service.title}</span>
              <Button variant="icon">
                <img src="arrow-right.png" alt="arrow-right" />
              </Button>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Services 
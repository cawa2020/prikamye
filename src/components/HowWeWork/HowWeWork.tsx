import { workPoints } from '../../data/points'
import Button from '../../shared/ui/Button/Button'
import './HowWeWork.scss'

const HowWeWork = () => {
    return (
        <section className="how-we-work">
            <div className='left-side'>
                <h2 style={{ marginBottom: 'var(--vertical-indent)' }}>Как мы работаем</h2>
                <Button variant="primary" size="big">Оставить заявку</Button>
                <img className='car-img' src="track.png" alt="track" />
            </div>
            <div className='points'>
                {workPoints.map((point) => (
                    <div key={point.number} className='point'>
                        <span className='point-number'>{point.number}</span>
                        <div>
                            <span className='service-title'>{point.title}</span>
                            <p style={{ marginTop: 12 }}>{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowWeWork 
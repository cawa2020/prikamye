import BurgerMenu from '../../shared/ui/BurgerMenu/BurgerMenu'
import Button from '../../shared/ui/Button/Button'
import './Header.scss'

const menuItems = [
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#contacts', label: 'Контакты' }
]

const contacts = [
  { icon: 'phone.png', text: '+ 7 3424 150 160' },
  { icon: 'phone.png', text: '+7495 308 3040 22 33' },
  { icon: 'mail.png', text: 'office@prikame.ru' }
]

const Header = () => {
  return (
    <header>
      <img className='logo' src="logo.png" alt="" />
      <div className='right-side'>
        <nav>
          {menuItems.map(item => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <Button variant="call" size="normal">
          <img src="phone-dark.png" alt="" />
          <span>Связаться</span>
        </Button>
        <BurgerMenu items={menuItems} contacts={contacts} />
      </div>
    </header>
  )
}

export default Header 
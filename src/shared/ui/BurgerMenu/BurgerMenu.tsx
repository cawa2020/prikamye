import Button from '../Button/Button'
import './BurgerMenu.scss'

interface BurgerMenuProps {
  items: Array<{
    href: string
    label: string
  }>
  contacts: Array<{
    icon: string
    text: string
  }>
}

const BurgerMenu = ({ items, contacts }: BurgerMenuProps) => {
  const handleMenuItemClick = () => {
    const checkbox = document.getElementById('burger-checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  return (
    <>
      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
      <label className="burger" htmlFor="burger-checkbox"></label>
      <div className="menu">
        <ul className='menu-list'>
          {items.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="menu-list__item"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <ul className='menu-contacts'>
            {contacts.map((contact, index) => (
              <li key={index}>
                <img src={contact.icon} alt="" />
                <span className='text-1'>{contact.text}</span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="big">Оставить заявку</Button>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu 
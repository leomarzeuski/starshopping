import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import './styles.scss';

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <>
      <div className="stars"></div>
      <header className="header-container">
        <NavLink to="/">
          <img src={'dart.png'} />
        </NavLink>
        <div className="header-buttons-container ">
          <button className="header-button black">
            <MapPin size={20} weight="fill" />
            Sorocaba, São Paulo
          </button>
          <NavLink to="/completeOrder">
            <button className="header-button blue ">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </button>
          </NavLink>
        </div>
      </header>
    </>
  )
}
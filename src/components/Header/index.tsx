import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { CartConteiner, Content, HeaderContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContex'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <Content>
        <span>
          <MapPin size={22} weight="fill" /> Nova Ponte, MG
        </span>
        <NavLink to="/checkout">
          <CartConteiner>
            <ShoppingCart size={22} weight="fill" />
            {cartQuantity === 0 ? <></> : <span>{cartQuantity}</span>}
          </CartConteiner>
        </NavLink>
      </Content>
    </HeaderContainer>
  )
}

import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { CartConteiner, Content, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <Content>
        <span>
          <MapPin size={22} weight="fill" /> Nova Ponte, MG
        </span>
        <CartConteiner>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </CartConteiner>
      </Content>
    </HeaderContainer>
  )
}

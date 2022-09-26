import { useContext } from 'react'
import { CartContext } from '../../context/CartContex'
import { CheckoutContainer } from './styles'
import { Form } from './components/Form'
import { CoffeeSelected } from './components/CoffeeSelected/index'
import { Payment } from './components/Payment'
export function Checkout() {
  const { cartItem } = useContext(CartContext)

  return (
    <form action="">
      <CheckoutContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <Form />
          <Payment />
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CoffeeSelected />
        </div>
      </CheckoutContainer>
    </form>
  )
}

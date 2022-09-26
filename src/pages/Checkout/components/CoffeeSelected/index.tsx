import { ButtonConfirm, CoffeeContainer, ConfirmRequest } from './styles'
import { CardsCoffees } from '../CardsCoffees/index'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContex'
export function CoffeeSelected() {
  const { cartItem } = useContext(CartContext)

  return (
    <>
      <CoffeeContainer>
        {cartItem.map((item) => {
          return <CardsCoffees key={item.id} coffee={item} />
        })}

        <ConfirmRequest>
          <div>
            <span>Total de itens</span>
            <span>R$ 19,00</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 21,00</strong>
          </div>
        </ConfirmRequest>

        <ButtonConfirm disabled={cartItem.length === 0} type="submit">
          confirmar pedido
        </ButtonConfirm>
      </CoffeeContainer>
    </>
  )
}

import { ButtonConfirm, CoffeeContainer, ConfirmRequest } from './styles'
import { CardsCoffees } from '../CardsCoffees/index'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContex'
import { formatMoney } from '../../../../utils/formatMoney'
export function CoffeeSelected() {
  const { cartItem, cartItemsTotal } = useContext(CartContext)

  const totalPay = formatMoney(cartItemsTotal + 3.5)

  return (
    <>
      <CoffeeContainer>
        {cartItem.map((item) => {
          return <CardsCoffees key={item.id} coffee={item} />
        })}

        <ConfirmRequest>
          <div>
            <span>Total de itens</span>
            <span>R$ {cartItemsTotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ {totalPay}</strong>
          </div>
        </ConfirmRequest>

        <ButtonConfirm disabled={cartItem.length === 0} type="submit">
          confirmar pedido
        </ButtonConfirm>
      </CoffeeContainer>
    </>
  )
}

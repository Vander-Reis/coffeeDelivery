import { CoffeeContainer, ButonContainer, ButtonDelete } from './styles'
import { ButtonIncrement } from '../../../../components/ButtonIncrement/index'
import { CoffeeCardProps } from '../../../Home/CardCoffee/index'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContex'
import { formatMoney } from '../../../../utils/formatMoney'

interface CoffeeItem extends CoffeeCardProps {
  quantity: number
}

interface CardProps {
  coffee: CoffeeItem
}

export function CardsCoffees({ coffee }: CardProps) {
  const { removeItemCart, cartItemQuantity } = useContext(CartContext)

  const totalCoffeesPrice = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(totalCoffeesPrice)

  function handleIncrement() {
    cartItemQuantity({ cartItemId: coffee.id, type: 'increase' })
  }

  function handleDecrement() {
    cartItemQuantity({ cartItemId: coffee.id, type: 'decrease ' })

    if (coffee.quantity <= 1) {
      const isConfirmToRemoveItem = confirm(
        'Você deseja remover este item do carrinho? ',
      )

      if (isConfirmToRemoveItem) {
        removeItemCart(coffee.id)
      }
    }
  }

  return (
    <CoffeeContainer>
      <div>
        <img src={coffee.image} alt={coffee.title} />
      </div>
      <div>
        <span>{coffee.title}</span>
        <ButonContainer>
          <ButtonIncrement
            increment={handleIncrement}
            quantity={coffee.quantity}
            decrement={handleDecrement}
          />

          <ButtonDelete onClick={() => removeItemCart(coffee.id)}>
            <Trash size={22} /> Remover
          </ButtonDelete>
        </ButonContainer>
      </div>

      <div>
        <span>R${String(formattedPrice).padEnd(4, '0')}</span>
      </div>
    </CoffeeContainer>
  )
}

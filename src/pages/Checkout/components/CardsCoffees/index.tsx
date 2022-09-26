import { CoffeeContainer, ButonContainer, ButtonDelete } from './styles'
import { ButtonIncrement } from '../../../../components/ButtonIncrement/index'
import { CoffeeCardProps } from '../../../Home/CardCoffee/index'
import { Trash } from 'phosphor-react'

interface CoffeeItem extends CoffeeCardProps {
  quantity: number
}

interface CardProps {
  coffee: CoffeeItem
}

export function CardsCoffees({ coffee }: CardProps) {
  return (
    <CoffeeContainer>
      <div>
        <img src={coffee.image} alt={coffee.title} />
      </div>
      <div>
        <span>{coffee.title}</span>
        <ButonContainer>
          <ButtonIncrement quantity={coffee.quantity} />

          <ButtonDelete>
            <Trash size={22} /> Remover
          </ButtonDelete>
        </ButonContainer>
      </div>

      <div>
        <span>R${String(coffee.price).padEnd(4, '0')}</span>
      </div>
    </CoffeeContainer>
  )
}

import { Minus, Plus } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ButtonIncrementProps {
  increment: () => void
  quantity: number
  decrement: () => void
}

export function ButtonIncrement({
  increment,
  quantity,
  decrement,
}: ButtonIncrementProps) {
  return (
    <ButtonContainer>
      <button onClick={decrement} type="button">
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={increment} type="button">
        <Plus />
      </button>
    </ButtonContainer>
  )
}

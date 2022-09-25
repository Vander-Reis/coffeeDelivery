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
      <button onClick={decrement}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={increment}>
        <Plus />
      </button>
    </ButtonContainer>
  )
}

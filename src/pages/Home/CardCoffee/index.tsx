import { ShoppingCart } from 'phosphor-react'
import { CoffeContainer, TagsContent, BuyCoffee } from './styles'
import { ButtonIncrement } from '../../../components/ButtonIncrement'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContex'
export interface CoffeeCardProps {
  id: number
  image: string
  tags: string[]
  title: string
  about: string
  price: number
}
interface CoffeeProps {
  coffee: CoffeeCardProps
}

export function CardCoffe({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    if (quantity <= 1) {
      alert('Você não pode abaixar mais o número deste item')
    } else {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItemCart() {
    const coffeeAdd = { ...coffee, quantity }

    addCoffeeToCart(coffeeAdd)
  }

  return (
    <CoffeContainer>
      <div>
        <img src={coffee.image} alt="" />
        <div>
          {coffee.tags.map((tag) => {
            return <TagsContent key={tag}>{tag}</TagsContent>
          })}
        </div>
        <h2>{coffee.title}</h2>
        <p>{coffee.about}</p>

        <BuyCoffee>
          <span>
            <small>R$ </small>
            {String(coffee.price).padEnd(4, '0')}
          </span>
          <div>
            <ButtonIncrement
              increment={handleIncrement}
              quantity={quantity}
              decrement={handleDecrement}
            />
          </div>
          <button onClick={handleAddItemCart}>
            <ShoppingCart weight="fill" />
          </button>
        </BuyCoffee>
      </div>
    </CoffeContainer>
  )
}

import { ShoppingCart } from 'phosphor-react'
import { CoffeContainer, TagsContent, BuyCoffee } from './styles'
import { ButtonIncrement } from '../../../components/ButtonIncrement'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContex'
export interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  about: string
  price: number
}

interface CoffeeProps {
  coffees: Coffee
}

export function CardCoffe({ coffees }: CoffeeProps) {
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
    const coffeeAdd = { ...coffees, quantity }

    addCoffeeToCart(coffeeAdd)
  }

  return (
    <CoffeContainer>
      <div>
        <img src={coffees.image} alt="" />
        <div>
          {coffees.tags.map((tag) => {
            return <TagsContent key={tag}>{tag}</TagsContent>
          })}
        </div>
        <h2>{coffees.title}</h2>
        <p>{coffees.about}</p>

        <BuyCoffee>
          <span>
            <small>R$ </small>
            {String(coffees.price).padEnd(4, '0')}
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

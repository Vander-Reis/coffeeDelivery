import { createContext, ReactNode, useState } from 'react'
import produce from 'immer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CardCoffeeProps {
  id: number
  image: string
  tags: string[]
  title: string
  about: string
  price: number
  quantity: number
}

// interface CartItemQuantity {
//   cartItemId: number
//   type: 'increase' | 'decrease '
// }

interface CartContextType {
  //   cartItemsTotal: number
  cartQuantity: number
  cartItem: CardCoffeeProps[]
  addCoffeeToCart: (data: CardCoffeeProps) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState<CardCoffeeProps[]>([])

  const cartQuantity = cartItem.length

  function addCoffeeToCart(data: CardCoffeeProps) {
    const existsCoffeeToCart = cartItem.findIndex(
      (coffee) => coffee.id === data.id,
    )

    const newCart = produce(cartItem, (draft) => {
      if (existsCoffeeToCart < 0) {
        draft.push(data)
      } else {
        draft[existsCoffeeToCart].quantity += data.quantity
      }
    })

    setCartItem(newCart)
  }

  console.log(cartItem)

  return (
    <CartContext.Provider
      value={{
        cartItem,
        cartQuantity,
        // cartItemsTotal,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

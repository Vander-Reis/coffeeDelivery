import { createContext, ReactNode, useEffect, useState } from 'react'
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

interface CartItemQuantity {
  cartItemId: number
  type: 'increase' | 'decrease '
}

interface CartContextType {
  cartItemsTotal: number
  cartQuantity: number
  cartItem: CardCoffeeProps[]
  addCoffeeToCart: (data: CardCoffeeProps) => void
  cartItemQuantity: (credentials: CartItemQuantity) => void
  removeItemCart: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState<CardCoffeeProps[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cartItem-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })

  useEffect(() => {
    const stateJson = JSON.stringify(cartItem)

    localStorage.setItem('@coffee-delivery:cartItem-1.0.0', stateJson)
  }, [cartItem])

  const cartQuantity = cartItem.length

  const cartItemsTotal = cartItem.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)

  console.log(cartItemsTotal)

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

  function cartItemQuantity({ cartItemId, type }: CartItemQuantity) {
    const coffeeAlreadyExistsInCart = cartItem.findIndex(
      (coffee) => coffee.id === cartItemId,
    )

    const newCart = produce(cartItem, (draft) => {
      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]

        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? ++item.quantity : --item.quantity
      }
    })

    setCartItem(newCart)
  }

  function removeItemCart(cartItemId: number) {
    const coffeeExists = cartItem.findIndex(
      (coffee) => coffee.id === cartItemId,
    )

    const updateToCart = produce(cartItem, (draft) => {
      if (coffeeExists >= 0) {
        draft.splice(coffeeExists, 1)
      }
    })

    setCartItem(updateToCart)
  }

  function cleanCart() {
    setCartItem([])
  }

  console.log(cartItem)

  return (
    <CartContext.Provider
      value={{
        cartItem,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        removeItemCart,
        cartItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { CartAction, CartReducer, CartState, cartInitialState } from "../reducers/cart-reducers"

type CartProviderProps = {
    children: ReactNode
}

type CartContextProps = {
    state: CartState
    dispatch: Dispatch<CartAction>
}

export const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState)

    if (state === undefined) {
        return 'Loading...'
    }

    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    )
}
import { CartItem, Product } from "../types"

const MIN_ITEMS = 1
const MAX_ITEMS = 10

export type CartAction =
    { type: 'add-to-cart', payload: { item: Product } } |
    { type: 'increase-quantity', payload: { id: Product['id'] } } |
    { type: 'decrease-quantity', payload: { id: Product['id'] } } |
    { type: 'remove-from-cart', payload: { id: Product['id'] } } |
    { type: 'clear-cart' }

export type CartState = {
    cart: CartItem[]
}

export const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const cartInitialState: CartState = {
    cart: initialCart()
}

export const CartReducer = (
    state = cartInitialState,
    action: CartAction
) => {
    if (action.type === 'add-to-cart') {
        const itemExists = state.cart.find(product => product.id === action.payload.item.id)
        let updatedCart: CartItem[] = []

        if (itemExists) {
            updatedCart = state.cart.map(product => {
                if (product.id === action.payload.item.id) {
                    if (product.quantity < MAX_ITEMS) {
                        return { ...product, quantity: product.quantity + 1 }
                    } else {
                        return product
                    }
                } else {
                    return product
                }
            })
        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]

        }

        localStorage.setItem('cart', JSON.stringify(updatedCart))
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'increase-quantity') {
        const cart = state.cart.map(product => {
            if (product.id === action.payload.id && product.quantity < MAX_ITEMS) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            }
            return product
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'decrease-quantity') {
        const cart = state.cart.map(product => {
            if (product.id === action.payload.id && product.quantity > MIN_ITEMS) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                }
            }
            return product
        })

        localStorage.setItem('cart', JSON.stringify(cart))
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'remove-from-cart') {
        const cart = state.cart.filter(product => product.id !== action.payload.id)
        localStorage.setItem('cart', JSON.stringify(cart))
        return {
            ...state,
            cart
        }
    }

    if (action.type === 'clear-cart') {
        localStorage.setItem('cart', JSON.stringify([]))
        return {
            ...state,
            cart: []
        }
    }
}
import { useMemo } from "react"
import { useCart } from "../hooks/useCart"

export default function Cart() {
    const { state, dispatch } = useCart()
    const isEmpty = useMemo(() => state.cart.length === 0, [state.cart])
    const cartTotal = useMemo(() => state.cart.reduce((total, item) => total + (item.quantity * item.price), 0), [state.cart])

    function formatCurrency(quantity: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(quantity)
    }

    return (
        <div className="cart">
            <img src="./cart.png" alt="cart icon" className="w-full h-auto" />
            <div id="cart" className="bg-slate-200 p-3 rounded-lg">
                {isEmpty ? (
                    <p className="text-center">Nothing Selected</p>
                ) : (
                    <>
                        <ul className="flex flex-col justify-center">
                            {state.cart.map(item => (
                                <li className="flex gap-2 items-center border-b border-slate-400 p-2">
                                    <img src={item.image[0]} alt={item.name} />
                                    <p className="flex-1">{item.name}</p>
                                    <p className="font-semibold">${item.price}</p>
                                    <button
                                        type="button"
                                        className="bg-blue-400 rounded-full font-bold w-6 y-auto"
                                        onClick={() => dispatch({ type: 'decrease-quantity', payload: { id: item.id } })}
                                    >-</button>
                                    <p>{item.quantity}</p>
                                    <button
                                        type="button"
                                        className="bg-blue-400 rounded-full font-bold w-6"
                                        onClick={() => dispatch({ type: 'increase-quantity', payload: { id: item.id } })}
                                    >+</button>
                                    <button
                                        type="button"
                                        className="bg-red-500 rounded-full font-bold w-6"
                                        onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: item.id } })}
                                    >X</button>
                                </li>
                            ))}
                            <p className="font-semibold flex justify-end p-2">Total: {formatCurrency(cartTotal)}</p>
                        </ul>
                        <button
                            type="button"
                            className="font-extrabold text-black text-center bg-amber-400 p-2 w-full rounded-lg"
                            onClick={() => dispatch({ type: 'clear-cart' })}
                        >Clear Cart</button>
                    </>
                )}


            </div>
        </div>

    )
}

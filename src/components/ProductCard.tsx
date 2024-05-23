import { Dispatch } from "react"
import { useCart } from "../hooks/useCart"
import { Product } from "../types"
import { CartAction } from "../reducers/cart-reducers"
import { NavLink } from "react-router-dom"

type ProductCardProps = {
    product: Product
    dispatch: Dispatch<CartAction>
}

export default function ProductCard({ product }: ProductCardProps) {
    const { dispatch } = useCart()

    return (
        <article className="border-[3px] border-gray-500 rounded-xl shadow-xl overflow-hidden flex flex-col w-[16rem] h-[22rem]">
            <div className="flex justify-center bg-slate-300 h-[14rem]">
                <img src={product.image[0]} alt={product.name} className="object-cover" />
            </div>
            <div className="flex-grow mt-2 ml-2">
                <h3 className="font-bold">{product.name}</h3>
                <p>Price: <span className="font-semibold">${product.price}</span></p>
            </div>
            <div className="flex gap-1">
                <NavLink
                    to={`/product/${product.id}`}
                    className="w-1/2 text-sm font-extrabold text-center bg-amber-400 p-2 m-1 rounded-lg"
                >Details</NavLink>
                <button
                    type="button"
                    className="w-1/2 text-sm font-extrabold text-center bg-violet-400 p-2 m-1 rounded-lg"
                    onClick={() => dispatch({ type: 'add-to-cart', payload: { item: product } })}
                >Add to Cart</button>
            </div>
        </article >
    )
}
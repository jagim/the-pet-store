import { shop as initialProducts } from "../data/shopItems.json"
import { NavLink, useParams } from "react-router-dom"
import { Product } from "../types"
import { useFilters } from "../hooks/useFilters"
import { useCart } from "../hooks/useCart"

export default function ProductDetailsView() {
    const { id } = useParams()
    const { filterProducts } = useFilters()
    const { dispatch } = useCart()
    const filteredProducts: Product[] = filterProducts(initialProducts)
    const product = filteredProducts.find(item => item.id === parseInt(id!))

    if (product) return (
        <div className="container mx-auto">
            <NavLink to='/'>
                <img src="/icons/arrow-left.svg" alt="arrow back icon" className="p-3 w-16" />
            </NavLink>
            <div className="w-2/3 mx-auto flex flex-col gap-5">
                <h2 className="font-bold text-4xl">{product.name}</h2>
                <p>{product.description}</p>
                <div className="bg-slate-300 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mx-auto w-fit border-[2px] border-black p-3 rounded-md">
                    {product.image.map(pic =>
                        <img src={pic} alt={product.name} className="w-[15rem] h-[15rem]" />
                    )}
                </div>
                <p className="text-xl">Price: <span className="font-bold text-green-700">${product.price}</span></p>
                <button
                    type="button"
                    className="font-bold text-center bg-violet-400 p-2 m-1 rounded-lg max-w-40"
                    onClick={() => dispatch({ type: 'add-to-cart', payload: { item: product } })}
                >Add to Cart</button>
            </div>
        </div>

    )
}
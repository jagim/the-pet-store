import { shop as initialProducts } from "../data/shopItems.json"
import Filters from "../components/Filters"
import { useFilters } from "../hooks/useFilters"
import ProductCard from "../components/ProductCard"
import { useCart } from "../hooks/useCart"

export default function IndexView() {
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(initialProducts)
    const { dispatch } = useCart()

    return (
        <div className="flex mt-10 gap-5">
            <aside className="ml-5">
                <Filters />
            </aside>
            <div className="container mx-auto">
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 place-items-center">
                    {filteredProducts.map(product =>
                        <ProductCard key={product.id} product={product} dispatch={dispatch} />
                    )}
                </div>
            </div>
        </div>
    )
}
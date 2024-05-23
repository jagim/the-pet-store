import { useContext } from "react"
import { Product } from "../types"
import { FiltersContext } from "../context/FiltersContext"

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (products: Product[]) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                product.price <= filters.maxPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                ) &&
                product.name.toLowerCase().includes(filters.query.toLowerCase())
            )
        })
    }

    return { filters, setFilters, filterProducts }
}
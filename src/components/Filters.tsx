import { ChangeEvent, FormEvent, useId } from "react"
import { categories } from "../data/categories.json"
import { useFilters } from "../hooks/useFilters"

export default function Filters() {
    const { filters, setFilters } = useFilters()
    const categoryId = useId()
    const minPriceId = useId()
    const maxPriceId = useId()
    const queryId = useId()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFilters({
            category: 'all',
            minPrice: 0,
            maxPrice: 1000,
            query: ''
        })
    }

    return (
        <form
            className="border-2 border-purple-950 rounded-xl p-4"
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <label htmlFor={categoryId} className="block text-sm font-bold mb-1 uppercase">Category</label>
                <select
                    name="category"
                    id={categoryId}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="">-- All --</option>
                    {categories.map(category =>
                        <option key={category} value={category}>{category}</option>
                    )}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor={minPriceId} className="block text-sm font-bold mb-1 uppercase">Min. Price</label>
                <input
                    type="input"
                    name="minPrice"
                    id={minPriceId}
                    placeholder="0"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={filters.minPrice}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor={maxPriceId} className="block text-sm font-bold mb-1 uppercase">Max. Price</label>
                <input
                    type="input"
                    name="maxPrice"
                    id={maxPriceId}
                    placeholder="1000"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={filters.maxPrice}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor={queryId} className="block text-sm font-bold mb-1 uppercase">Search</label>
                <input
                    type="text"
                    name="query"
                    id={queryId}
                    placeholder="Fish food, Dog treats, Cat bed..."
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={filters.query}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Clear Filters" className="w-full bg-purple-950 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" />
        </form>
    )
}

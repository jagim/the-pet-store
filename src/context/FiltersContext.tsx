import { Dispatch, ReactNode, createContext, useState } from "react"
import { Filters } from "../types"

type FiltersProviderProps = {
    children: ReactNode
}

type FiltersContextProps = {
    filters: Filters
    setFilters: Dispatch<React.SetStateAction<Filters>>
}

export const FiltersContext = createContext<FiltersContextProps>(null!)

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
        maxPrice: 1000,
        query: ''
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}
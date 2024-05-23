export type Product = {
    id: number,
    name: string,
    category: string,
    description: string,
    price: number,
    image: string[]
}

export type Filters = {
    category: string,
    minPrice: number,
    maxPrice: number,
    query: string
}

export type CartItem = Product & {
    quantity: number
}
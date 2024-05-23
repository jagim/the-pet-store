import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router.tsx'
import { FiltersProvider } from "./context/FiltersContext"
import { CartProvider } from "./context/CartContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FiltersProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </FiltersProvider>
  </React.StrictMode>
)

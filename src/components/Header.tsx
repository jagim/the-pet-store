import { NavLink, useLocation } from "react-router-dom"
import Logo from "./Logo"
import { useMemo } from "react"
import Cart from "./Cart"


export default function Header() {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header>
            <div className="bg-gradient-to-b from-neutral-800 to-purple-600 p-5 text-white border-b-[3px] border-purple-950">
                <div className="container mx-auto flex justify-between ">
                    <Logo />
                    <nav className="flex gap-5 my-auto">
                        <NavLink to="/" className="font-bold p-2 rounded-lg hover:scale-125 hover:text-orange-400">Home</NavLink>
                        <NavLink to="/find-us" className="font-bold p-2 rounded-lg hover:scale-125 hover:text-orange-400">Find Us</NavLink>
                        <NavLink to="/services" className="font-bold p-2 rounded-lg hover:scale-125 hover:text-orange-400">Services</NavLink>
                        <NavLink to="/about" className="font-bold p-2 rounded-lg hover:scale-125 hover:text-orange-400">About Us</NavLink>
                        <div className="w-8 mt-1">
                            <Cart />
                        </div>
                    </nav>
                </div>
            </div>

            {isHome && (
                <div className="container mx-auto mt-3">
                    <img src="./Pet-Store-banner.png" alt="banner image" className="shadow-2xl rounded-xl" />
                </div>
            )}
        </header>
    )
}
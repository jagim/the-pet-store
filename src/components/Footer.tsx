import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white mt-10 p-3">
            <div className="container mx-auto flex md:flex-row md:justify-evenly flex-col items-center gap-2">
                <div className="border-[3px] border-white my-auto p-2 w-fit">
                    <Logo />
                </div>
                <div className="p-2">
                    <h3 className="text-xl font-medium underline mt-2 text-center">Social Medias:</h3>
                    <nav className="flex gap-2 w-fit">
                        <Link to="https://www.instagram.com/@ThePetStore" className="p-2 my-auto hover:scale-110">
                            <img src="./icons/instagram-icon.svg" alt="instagran icon" className="w-8" />
                        </Link>
                        <Link to="https://www.facebook.com/@ThePetStore" className="p-2 my-auto hover:scale-110">
                            <img src="./icons/facebook-icon.svg" alt="facebook icon" className="w-8" />
                        </Link>
                        <Link to="https://www.youtube.com/@ThePetStore" className="p-2 my-auto hover:scale-110">
                            <img src="./icons/youtube-icon.svg" alt="youtube icon" className="w-10" />
                        </Link>
                    </nav>
                </div>
                <div className="p-2">
                    <h3 className="text-xl font-medium underline mt-2 text-center">Links:</h3>
                    <nav className="flex gap-2">
                        <NavLink to="find-us" className="text-sm font-medium p-2 hover:text-orange-400 hover:scale-110">- Find Us</NavLink>
                        <NavLink to="services" className="text-sm font-medium p-2 hover:text-orange-400 hover:scale-110">- Services</NavLink>
                        <NavLink to="about" className="text-sm font-medium p-2 hover:text-orange-400 hover:scale-110">- About Us</NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

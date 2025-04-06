import { Link } from "react-router-dom"


export default function Header() {
    return (
        <nav className="header bg-cover bg-center bg-blend-multiply bg-black/70 px-8 py-20">
            <ul className="flex justify-between items-center">
                <li className="text-[30px] text-[#FFFFFF] font-[800] md:text-[10px]"><Link to="/">Find your film</Link></li>
                <li className="text-[10px] text-[#FFFFFF] font-[700]"><Link to="wishlist">My Watchlist</Link></li>
            </ul>
        </nav>
    )
}
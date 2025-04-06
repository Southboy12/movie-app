import { Link } from "react-router-dom"


export default function WishlistHeader() {
    return (
        <nav className="header bg-cover bg-center bg-blend-multiply bg-black/70  px-8 py-20">
            <ul className="flex justify-between items-center">
                <li className="text-[42px] text-[#FFFFFF] font-[800]"><Link to="/">My Wishlist</Link></li>
                <li className="text-[14px] text-[#FFFFFF] font-[700]"><Link to="wishlist">Search for movies</Link></li>
            </ul>
        </nav>
    )
}
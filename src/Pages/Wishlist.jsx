import { Outlet } from "react-router-dom"
import WishlistHeader from "../components/WishlistHeader"


export default function Home() {
    return (
        <div className="relative">
            <WishlistHeader />
            <Outlet />
        </div>
    )
}
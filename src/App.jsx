import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./Pages/Home"
import Content from "./components/Content"
import WishlistContent from "./components/WishlistContent"
import Wishlist from "./Pages/Wishlist"



function App() {
  const [wishListMovies, setWishListMovies] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)

  function addMovie(movie) {
    
    setWishListMovies((prevMovies) => {
      const movieExists = prevMovies.some((item) => item.id === movie.id);
      if (!movieExists) {        
        return [...prevMovies, movie]
      }   
      alert("Movie already exist")   
      return prevMovies
    })    
  }

  function removeMovie(movie) {
    setWishListMovies((prevMovies) => prevMovies.filter((item) => item.id !== movie.id))
  }

  useEffect(() => {
    //Load movies from local storage on component mount
    const storedMovies = localStorage.getItem("movieslist")
    if (storedMovies) {
        setWishListMovies(JSON.parse(storedMovies));
    }
    setIsInitialized(true)
 }, [])

 useEffect(() => {
    //Save movies to local storage whenever state changes
    if (isInitialized) {
      localStorage.setItem("movieslist", JSON.stringify(wishListMovies))
    }
   
 }, [wishListMovies, isInitialized])
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Content addMovie={addMovie} />} /> 
          </Route>

          <Route path="wishlist" element={<Wishlist />} >
            <Route index element={<WishlistContent removeMovie={removeMovie} wishListMovies={wishListMovies} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

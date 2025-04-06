import { useState } from "react";


export default function Content({ addMovie }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(0)

    // const inputEl = document.querySelector("#searchInput")

    function handleChange(event) {
        setQuery(event.target.value)
    }


    async function fetchMovies() {
        setLoading(true);
        setError(null)
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=d008315a2e1a1f7aaddb9cf61dd0af2e&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`;
            let response = await fetch(url)
            let data = await response.json()
            setPage(data.page)   
            setMovies(data.results || [])
            
        } catch (error) {
            console.error("Error fetching data:", error);   
            setError('Failed to fetch movies. Please try again')
        } finally {
            setLoading(false)
        }        
    }

     


    return (
        <div className="relative mx-8"> {/* Parent container with relative positioning and horizontal padding */}
            <div className="absolute -top-6 left-0 right-0 border border-gray-300 h-[50px] bg-[#FFFFFF] rounded">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                        id="searchInput"
                        className="relative border-r border-gray-300 text-sm/5 font-medium w-9/12 h-[50px] pl-10" 
                        type="text" 
                        name={query}
                        placeholder="Search for a movie" 
                        onChange={handleChange}
                        value={query}
                    />
                    <button type="submit" onClick={fetchMovies} className="bg-gray-200 text-[#374151] text-sm/5 font-medium w-3/12 h-[50px]">Search</button>
                    <img className="absolute top-[17px] left-3" src="/Icon.svg" alt="" />
                </form>
            </div>
            {
                loading ? (
                    <p className="py-20">Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : movies.length > 0 ? (
                        <div className="py-10">
                            {movies.map((movie) => (
                                
                                <div key={movie.id} >
                                    <div className="w-full border-b border-gray-300 py-6 flex gap-4">
                                        <div className="w-3/12 h-[147px]">
                                            <img className="w-full transition-transform duration-500 hover:scale-110" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                        </div>
                                        <div className="w-9/12 flex flex-col justify-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-[18px] font-[500] text-[#000000] line-clamp-1">{movie.title}</h2>
                                                <img src="/star.svg" alt="" />
                                                <span className="text-[12px] font-[400] text-[#111827]">{movie.vote_average}</span>
                                            </div>
                                            <div className="text-[12px] font-[400] flex gap-4 text-[#111827] ">
                                                <span className="">117 min</span>
                                                <span>Action, Drama, Sci-fi</span>
                                                <div  className="flex gap-1" onClick={() => addMovie(movie)}>
                                                    <img className="w-[16px] h-[16px] hover:scale-120" src="/add.svg" alt="" />
                                                    <span className="transition-transform duration-300 hover:scale-120">Watchlist</span>
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-[#6B7280] font-[400] line-clamp-3">
                                                {movie.overview}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                    
                                )) 
                            }
                        </div>
                    
                ) : page === 1 ? (
                    <div className="flex flex-col items-center h-186 justify-center">
                        <h3 className="text-center w-2/3 font-[700] text-[18px] text-[#DFDDDD]">Unable to find what you're looking for. Please try another search.</h3>
                    </div>
                    ) : (
                    <div className="flex flex-col items-center h-186 justify-center">
                        <div>
                            <img className="" src="/Icon.png" alt="video icon" />
                        </div>
                        <h3 className="font-[700] text-[18px] text-[#DFDDDD]">Start exploring</h3>
                    </div>
                )
            }
        </div>
    );
}

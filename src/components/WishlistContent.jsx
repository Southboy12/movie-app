export default function WishlistContent({ wishListMovies }) {    
    console.log(wishListMovies.length);
    

    return (
        <div className="relative mx-8"> {/* Parent container with relative positioning and horizontal padding */}
            {wishListMovies.length === 0 ? (
                <div className="flex flex-col items-center h-186 justify-center gap-2">
                    <p className="text-[18px] text-[#DFDDDD] font-[700]">Your watchlist is looking a little empty...</p>
                    <div className="flex items-center justify-center gap-1">
                        <img src="/src/assets/add.svg" alt="" />
                        <h3 className="font-[700] text-[14px] text-[#363636]">Let's add some movies!</h3>
                    </div>
                </div>
           ) : (
                <div className="py-10">
                    {wishListMovies.map((movie) => (
                        
                        <div key={movie.id} >
                            <div className="w-full border-b border-gray-300 py-6 flex gap-4">
                                <div className="w-3/12 h-[147px]">
                                    <img className="w-full" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                </div>
                                <div className="w-9/12 flex flex-col justify-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-[18px] font-[500] text-[#000000] line-clamp-1">{movie.title}</h2>
                                        <img src="/src/assets/star.svg" alt="" />
                                        <span className="text-[12px] font-[400] text-[#111827]">{movie.vote_average}</span>
                                    </div>
                                    <div className="text-[12px] font-[400] flex gap-4 text-[#111827] ">
                                        <span className="">117 min</span>
                                        <span>Action, Drama, Sci-fi</span>
                                        <div  className="flex gap-1">
                                            <img className="w-[16px] h-[16px]" src="/src/assets/remove.svg" alt="" />
                                            <span>Remove</span>
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
           )}
            
        </div>
    );
}

import { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
import "./Movies.css"

const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard= ({movieData})=>{
    return (
        <>
            <div className="movie-card">
                <img src={`${imgBaseUrl}/${movieData.poster_path}`} alt="" srcset="" />
                <div className="movie-details">
                    <h2 className="movie-title">{movieData.title}</h2>
                    <p className="movie-overview">{movieData.overview}</p>
                    <p className="movie-release">Rating: {movieData.vote_average}</p>
                    <p className="movie-popularity">Popularity: {movieData.popularity}</p>

                </div>
            </div>
        </>
    )
}
function Movies(){
    const [movieList, setMovies] = useState([]);
    useEffect(()=>{
       (async function fetchData(){
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0")
                const moviesData = await response.json();
                console.log(`Page : ${moviesData.page}`)
                console.log(moviesData.results)
                setMovies(moviesData.results)


            } catch (error) {
                console.log(`Error:${error}`);
            }    
        })();
    },[]);

    return (
        <>
            <h1>Movies</h1>
            {
                movieList.length !== 0?
                    <div className="movie-container">
                        {movieList.map((movie) =>{
                            return (<MovieCard movieData={movie}/>)
                        })
                    }
                    </div>
                : <>
                    <h1>No data found!!</h1>
                </>
            }

            
        </>
    )
}





export default Movies;

import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.css"

function Movies(){
    const [movieList, setMovies] = useState([]);
    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0")
                const moviesData = await response.json();
                console.log(`Page : ${moviesData.page}`)
                console.log(moviesData.results)
                setMovies(moviesData.results)
            } catch (error) {
                console.log(`Error:${error}`);
            }    
        };
        fetchData();
    },[]);

    return (
        <>
            <h1>Movies</h1>
            
            <Link to={"/"}>
                <button>Home</button>
            </Link>

            <main>
                <div>
                    <h2>Movies List:</h2>
                    <ul>
                        {movieList.map(movie=>(
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <p><strong>Release Date:</strong>{movie.release_date}</p>
                                <p><strong>Rating: </strong>{movie.vote_average}</p>
                                <p>{movie.overview.substring(onabort,15)}...</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Movies;

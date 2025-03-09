import { useEffect } from "react";
import { Link } from "react-router-dom";

function Movies(){
    const [movieList, setMovies] = useState([]);
    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0")
                const moviesData = await response.json();
                console.log(`Page : ${moviesData.page}`)
                // console.table(moviesData.results)
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
                    <p></p>
                </div>
            </main>
        </>
    )
}

export default Movies;

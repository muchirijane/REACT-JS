import {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie  from "./components/AddMovie";
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
const [isLoading, setLoading] = useState(false);
const [error, setError] = useState(null);
   const fetchMoviesHandler =useCallback( async()=>  {
       setLoading(true);
       setError(null)
       try{

           const res = await fetch('https://movie-project-88324-default-rtdb.firebaseio.com/movies.json');
           if(!res.ok){
               throw new Error(`Something went wrong, ${res.status}.`);
           }
           const data = await res.json();

           const transformedMovies =  data.results.map((movieData) => {
               return {
                   id: movieData.episode_id,
                   title: movieData.title,
                   openingText: movieData.opening_crawl,
                   releaseDate: movieData.release_date,
               };
           });
           setMovies(transformedMovies);

       } catch (error) {
           setError(error.message);
       }
       setLoading(false);
    })

    useEffect(()=>{
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    function addMovieHandler(movie) {
        fetch('https://movie-project-88324-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movie)  ,
            
        });
    }

    let content =  <p>No movies Found</p>;
    if(isLoading){
         content = <p>Loading....</p>;
    }
    if(error) {
        content = <p>{error}</p>;
    }
    if(movies.length > 0){
       content =  <MoviesList movies={movies} />;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </>
    );
}

export default App;

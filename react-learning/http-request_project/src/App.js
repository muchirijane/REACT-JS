import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
const [isLoading, setLoading] = useState(false);
const [error, setError] = useState(null);
   async function fetchMoviesHandler() {
       setLoading(true);
       setError(null)
       try{

           const res = await fetch('https://swapi.dev/api/film/');
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


    }
    let content =  <p>No movies Found</p>
    if(isLoading){
        return content = <p>Loading....</p>
    }
    if(error) {
        return <p>{error}</p>
    }
    if(movies.length > 0){
       return  <MoviesList movies={movies} />
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
                {!isLoading && movies.length === 0 &&  <p> No movies found yet </p> }
                {isLoading && <p>Loading....</p> }
                {isLoading && error && <p>{error}</p>}
            </section>
        </React.Fragment>
    );
}

export default App;

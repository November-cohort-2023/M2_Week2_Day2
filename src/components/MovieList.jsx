import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
 
import { Button, Flex } from 'antd';

 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);

  const [allMovies,setAllMovies] = useState(moviesDataJSON)
  

  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = allMovies;
    } else {
      filteredMovies = allMovies.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
    console.log(filteredMovies)
    setMovies(filteredMovies);
  };
 

  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovieList={filterMovieList}></FilterMovies>
      <AddMovie setAllMovies={setAllMovies} allMovies= {allMovies} movies={movies} setMovies={setMovies}></AddMovie>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
       <Flex gap="small" wrap="wrap">
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
    </div>
  );
}
 
export default MovieList;

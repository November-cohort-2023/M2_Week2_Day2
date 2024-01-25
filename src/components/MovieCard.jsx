import React from "react";
 
function MovieCard(props) {

 
  return (
    <div className="MovieCard">
      <h3>{props.movie.title}</h3>
      <p>Director: {props.movie.director}</p>
      <p>Rating: {props.movie.IMDBRating}</p>
    </div>
  );
}
 
export default MovieCard;

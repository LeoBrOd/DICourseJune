import React from "react";

const MovieCard = ({ Poster, Title, Year }) => {
  console.log({ Poster });
  return (
    <div>
      <img src={Poster} alt="Unavalaible"></img>
      <h4>{Title}</h4>
      <h5>{Year}</h5>
      <button>See more...</button>
    </div>
  );
};

export default MovieCard;

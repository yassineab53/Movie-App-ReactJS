import React from 'react';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Movie = ({ title, poster_path, vote_average, overview }) => (
  <div className="movie">
    <img src={IMG_PATH + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>
    <div className="overview">
      <h3>Overview</h3>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;

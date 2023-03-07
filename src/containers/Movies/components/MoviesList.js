import React, { Component } from 'react';
import Movie from './Movie';
import "./Movie.css";


class MoviesList extends Component {

  render() {
    return (
      <div className="movie_container">
        {this.props.movies.map((movie, i) => (
          <Movie
            key={movie.id}
            movieItem={movie}
            id={i}
            deleteMovie={() => this.props.deleteMovie(i)}
            editMovie={this.props.editMovie} />
        ))}
      </div>
    )
  }
};

export default MoviesList;
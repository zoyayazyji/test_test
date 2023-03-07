import React, { Component } from 'react';
import { v4 as uuid } from "uuid";
import "./Movies.css";
import Form from "./components/Form";
import MoviesList from './components/MoviesList';
import axios from "../../axiosOrder";

const movies = []

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    }
  }

  createTask = async (movie) => {
    if (!movie || movie === " ") {
      return alert("Please add a Movie name");
    };
    movies.push({ movie, id: uuid() });
    this.setState({ movies: movies });

    const order = {

      item: [...this.state.movies, this.state.movies]
    }
    try {
      await axios.post("/movies.json", order);
    } catch (e) {
      console.log(e)
    }

  };

  deleteMovie = (movieId) => {
    movies.splice(movieId, 1);
    this.setState({ movies: movies });
  };

  editMovie = (movieId, movie) => {
    const movieItem = movies[movieId];
    movieItem.movie = movie;
    this.setState({ movies: movies });
  };

  render() {
    return (
      <>
        <div className="movies">
          <h2>List Movies to watch</h2>
          <Form
            createTask={this.createTask}
            setState={this.setState}
            state={this.state}
          />
          <MoviesList
            movies={this.state.movies}
            deleteMovie={this.deleteMovie}
            editMovie={this.editMovie}
          />
        </div>
      </>
    )
  }
};
export default Movies;
import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movieItem.movie,
      isEditing: false,
    }
  };

  setEditingState = (isEditing) => {
    this.setState({ isEditing })
  };

  handleChange = (event) => {
    this.setState({ movie: event.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editMovie(this.props.id, this.state.movie);
    this.setState({ isEditing: false });
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.movie !== this.state.movie
  };

  render() {
    return (
      <div className="movie">
        {this.state.isEditing ? (
          <>
            <div className="movie_item">
              <form onSubmit={this.handleSubmit}>
                <p className="movie_text"><input className="input_list" value={this.state.movie}
                  onChange={this.handleChange}
                  autoFocus /></p>
              </form>
              <p className="movie_btn1" type="submit" onClick={this.handleSubmit}>Save</p>
              <p className="movie_btn" onClick={() => this.setEditingState(false)} type="button">Back</p>
            </div>
          </>
        ) : (
          <>
            <div className="movie_item">
              <p className="movie_text"> {this.props.movieItem.movie}</p>
              <p className="movie_btn1" onClick={() => this.setEditingState(true)}>Edit</p>
              <p className="movie_btn" onClick={this.props.deleteMovie}>Delete</p>
            </div>
          </>
        )}
      </div>
    )
  }
};

export default Movie;
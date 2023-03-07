import React, { Component } from 'react';
import "./Form.css";
import axios from "../../../axiosOrder";


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: ""
    }
  };

  handleChange = (e) => {
    this.setState({ movie: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.createTask(this.state.movie);
    this.setState({ movie: '' });

    axios.get("/movies.json")
      .then(response => {
        this.setState({ movie: response.item })
        console.log(response.data)
        const userArr = Object.keys(response.data)?.map(userId => {
          return { ...response.data[userId], id: userId }
        })
        let lastArr = userArr[userArr.length - 1]
        console.log(lastArr.item)
        this.props.setState(lastArr.item)
      })
    console.log(this.props.state)
  };

  render() {
    return (
      <form >
        <input className="input_form" type="text" placeholder="Movie name" value={this.state.movie} onChange={this.handleChange} />
        <button className="form_btn" type="submit" onClick={this.handleSubmit} >Add</button>
      </form>
    )
  }
};

export default Form;
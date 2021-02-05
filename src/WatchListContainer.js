import React, { Component } from "react";

/*
Data
shows: [] in state
Display

Behavior
*/
export default class WatchListContainer extends Component {
  state = {
    shows: [
      {
        name: "Bridgerton",
        description: "Period piece about courtly drama",
        whereToWatch: "Netflix"
      }
    ],
    name: "",
    description: "",
    whereToWatch: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, whereToWatch } = this.state;
    let newShow = { name, description, whereToWatch };
    this.setState((prevState) => {
      return {
        name: "",
        description: "",
        whereToWatch: "",
        shows: [...prevState.shows, newShow]
      };
    });
  };

  render() {
    return (
      <div className="container w-60 mx-auto">
        <h1 className="text-3xl font-semibold text-center">WatchList</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="mb-2">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="border w-full rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </fieldset>
          <fieldset className="mb-2">
            <label className="block">Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="border w-full rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </fieldset>
          <fieldset className="mb-2">
            <label className="block">Where to Watch</label>
            <input
              type="text"
              name="whereToWatch"
              value={this.state.whereToWatch}
              onChange={this.handleChange}
              className="border w-full rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </fieldset>
          <input
            className="block p-4 mt-4 w-full bg-blue-200 cursor-pointer"
            type="submit"
            value="Add Show"
          />
        </form>
        <ul className="mt-4">
          {this.state.shows.map((show) => (
            <li key={show.name}>
              {show.name} - {show.description}. Watch it on: {show.whereToWatch}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Container => Maintaining and updating state, passing props to other components
// WatchList => receives props from container and renders list

// WatchListForm => maintains form state, and uses event listeners to manage user behavior,
//finally calls a method passed down from container as a prop which will add the show to the watchlist

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    rating: 0.0,
    duration: "",
    search: "",
    results: [],
    searchResults: []
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    const result = {
      name: this.state.name,
      rating: this.state.rating,
      duration: this.state.duration
    };
    if (
      this.state.name !== "" &&
      this.state.rating !== "" &&
      this.state.duration !== ""
    ) {
      let found = false;
      for (let r of this.state.results) {
        if (r.name === this.state.name) {
          found = true;
          break;
        }
      }

      if (!found) {
        this.setState(state => ({
          results: [...this.state.results, result],
          name: "",
          rating: 0.0,
          duration: ""
        }));
      }
    }

    //console.log(this.state.results);
  };
  filterSearch = e => {
    let input = e.target.value;
    let searchResults = [];

    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    input.length > 0 &&
      (searchResults = this.state.results.filter(r =>
        r.name.toLowerCase().includes(input.toLowerCase())
      ));
    this.setState({ searchResults });
  };

  render() {
    const {
      name,
      rating,
      duration,
      search,
      results,
      searchResults
    } = this.state;
    let resultDiv;

    if (search === "") {
      resultDiv = (
        <div>
          <table id="directory-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Duration</th>
              </tr>
              {results.map((r, index) => {
                return (
                  <tr key={index}>
                    <th>{r.name}</th>
                    <th>{r.rating}</th>
                    <th>{r.duration}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      console.log("sR:", searchResults);

      if (searchResults === [] || searchResults.length < 1) {
        resultDiv = <p id="no-result">No Results Found</p>;
      } else {
        resultDiv = (
          <div>
            <table id="directory-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Duration</th>
                </tr>
                {this.state.searchResults.map((r, index) => {
                  return (
                    <tr key={index}>
                      <th>{r.name}</th>
                      <th>{r.rating}</th>
                      <th>{r.duration}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }

    return (
      <div>
        <h4>Movie Name</h4>
        <input
          name="name"
          type="text"
          id="name-input"
          value={name}
          onChange={this.handleChange}
        />
        <h4>Ratings</h4>
        <input
          name="rating"
          type="number"
          step="0.01"
          id="ratings-input"
          value={rating}
          onChange={this.handleChange}
        />
        <h4>Duration</h4>
        <input
          name="duration"
          type="text"
          id="duration-input"
          value={duration}
          onChange={this.handleChange}
        />
        <button id="submit-button" onClick={this.handleSubmit}>
          Submit
        </button>
        <h4>Search</h4>
        <input
          name="search"
          type="text"
          id="search-input"
          value={search}
          onChange={this.filterSearch}
        />
        {resultDiv}
      </div>
    );
  }
}

export default App;

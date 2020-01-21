import React, { Component } from "react";
import ChangePhoto from "./ChangePhoto";
export class CarouselClass extends Component {
  state = {
    photos: [],
    index: 1
  };
  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 5; i++) {
          //console.log(data[i].url);
          this.setState(state => ({
            photos: [...state.photos, data[i].url]
          }));
        }
      })
      .then(() => {
        console.log(this.state.photos);
      });
  };
  minusHandler = e => {
    if (this.state.index > 0) {
      this.setState(state => ({ index: state.index - 1 }));
    }
  };
  plusHandler = e => {
    if (this.state.index < 4) {
      this.setState(state => ({ index: state.index + 1 }));
    }
  };
  searchHandler = e => {
    if (e.key === "Enter") {
      if (e.target.value >= 0 && e.target.value <= 4) {
        this.setState({ index: e.target.value });
      }
    }
  };
  render() {
    const { photos, index } = this.state;
    return (
      <div>
        <img src={photos[index]} alt="dd"></img>
        <ChangePhoto
          minus={this.minusHandler}
          plus={this.plusHandler}
          search={this.searchHandler}
        />
      </div>
    );
  }
}

export default CarouselClass;

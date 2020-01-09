import React, { useState, useEffect } from "react";
import ChangePhoto from "./ChangePhoto";
import axios from "axios";
const Carousel = () => {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    // fetch
    // fetch(`https://jsonplaceholder.typicode.com/photos`)
    //   .then(response => response.json())
    //   .then(data => {
    //     for (let i = 0; i < 5; i++) {
    //       console.log(data[i].url);
    //       setPhotos(photos => [...photos, data[i].url]);
    //     }
    //   })
    //   .then(() => {
    //     //console.log(photos);
    //   });

    // axios
    for (let i = 1; i < 6; i++) {
      let response = await axios(
        `https://jsonplaceholder.typicode.com/photos/${i}`
      );
      setPhotos(photos => [...photos, response.data.url]);
    }
  };
  const minusHandler = e => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const plusHandler = e => {
    if (index < 4) {
      setIndex(index + 1);
    }
  };
  const searchHandler = e => {
    if (e.key === "Enter") {
      if (e.target.value >= 0 && e.target.value <= 4) {
        setIndex(e.target.value);
      }
    }
  };
  console.log(photos, index);
  return (
    <div>
      <img src={photos[index]} alt="dd"></img>
      <ChangePhoto
        minus={minusHandler}
        plus={plusHandler}
        search={searchHandler}
      />
    </div>
  );
};

export default Carousel;

import React, { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";

const MovieModal = movie => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  let url = IMAGE_URL + movie.movie.poster_path;
  let url2 = IMAGE_URL + movie.movie.backdrop_path;

  const genre_map = {
    "28": "Action",
    "12": "Adventure",
    "16": "Animation",
    "35": "Comedy",
    "80": "Crime",
    "99": "Documentary",
    "18": "Drama",
    "10751": "Family",
    "14": "Fantasy",
    "36": "History",
    "27": "Horror",
    "10402": "Music",
    "9648": "Mystery",
    "10749": "Romance",
    "878": "Science Fiction",
    "10770": "TV Movie",
    "53": "Thriller",
    "10752": "War",
    "37": "Western"
  };
  const genre_color = {
    "28": "ForestGreen",
    "12": "SteelBlue",
    "16": "pink",
    "35": "DarkTurquoise",
    "80": "DarkSlateBlue",
    "99": "FireBrick",
    "18": "LightSeaGreen",
    "10751": "GoldenRod",
    "14": "Salmon",
    "36": "Olive",
    "27": "Maroon",
    "10402": "Fuchsia",
    "9648": "LightSkyBlue",
    "10749": "Romance",
    "878": "LightCoral",
    "10770": "Indigo",
    "53": "DarkViolet",
    "10752": "Gold",
    "37": "IndianRed"
  };

  const [modal, setModal] = useState(false);
  //console.log(movie.movie);
  const toggle = () => setModal(!modal);
  const genres = movie.movie.genre_ids;
  const modalStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backgroundImage: "url(" + url + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "auto",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.7)",
    color: "white"
  };
  const genreStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  };
  return (
    <Fragment>
      <Button size="sm" color="info" onClick={toggle}>
        Get Details
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{movie.movie.title}</ModalHeader>
        <ModalBody style={modalStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <img
              src={url2}
              style={{ width: "70%", height: "auto" }}
              alt="pic"
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <h5>Vote Count: {movie.movie.vote_count}</h5>
            <h5>Vote Average: {movie.movie.vote_average}</h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <h5>Original Language:</h5>
            <h5 style={{ textTransform: "uppercase" }}>
              {movie.movie.original_language}
            </h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <h5>Release Date: {movie.movie.release_date}</h5>
          </div>
          <div style={genreStyle}>
            {(() => {
              const genreName = [];
              const color = [];
              genres.forEach(genreid => {
                color.push(genre_color[genreid.toString()]);
                genreName.push(genre_map[genreid.toString()]);
              });
              if (genreName) {
                console.log(genreName);
                return (
                  <Fragment>
                    {genreName.map((g, i) => (
                      <h6
                        key={g}
                        style={{
                          backgroundColor: color[i],
                          padding: "5px 10px"
                        }}
                      >
                        {g}
                      </h6>
                    ))}
                  </Fragment>
                );
              }
            })()}
          </div>
          <p>{movie.movie.overview}</p>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
MovieModal.propTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieModal;

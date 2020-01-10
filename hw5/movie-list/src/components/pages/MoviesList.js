import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getAllMovies,
  nextPage,
  prevPage,
  sort
} from "../../actions/moviesActions";
import MovieItem from "../MovieItem";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";

const MoviesList = ({
  movies_obj: {
    movies,
    likeButton,
    loading,
    page,
    total_pages,
    title_asc,
    voteC_asc,
    voteA_asc,
    releaseDate_asc
  },
  getAllMovies,
  nextPage,
  prevPage,
  sort
}) => {
  console.log(movies.movies_obj);
  getAllMovies();
  if (loading === true) {
    console.log("loading");
    return <div>loading....</div>;
  }

  return (
    <Fragment>
      <div className="homepage-item">
        <h1> All Movies List</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button
            outline
            color="info"
            size="sm"
            onClick={() => {
              sort("title", title_asc);
            }}
          >
            Title{"  "}
            {title_asc ? (
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            ) : (
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            )}
          </Button>
          <Button
            outline
            color="info"
            size="sm"
            onClick={() => {
              sort("voteC", voteC_asc);
            }}
          >
            Vote Count{"  "}
            {voteC_asc ? (
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            ) : (
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            )}
          </Button>
          <Button
            outline
            color="info"
            size="sm"
            onClick={() => {
              sort("voteA", voteA_asc);
            }}
          >
            Vote Average{"  "}
            {voteA_asc ? (
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            ) : (
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            )}
          </Button>
          <Button
            outline
            color="info"
            size="sm"
            onClick={() => {
              sort("date", releaseDate_asc);
            }}
          >
            Release Date{"  "}
            {releaseDate_asc ? (
              <FontAwesomeIcon icon={faLongArrowAltUp} />
            ) : (
              <FontAwesomeIcon icon={faLongArrowAltDown} />
            )}
          </Button>
        </div>

        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button size="sm" onClick={prevPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <div>
            {page}/{total_pages}
          </div>

          <Button size="sm" onClick={nextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <hr />
        <div id="movie-list">
          {!loading && movies.length === 0 ? (
            <h3>Loading...</h3>
          ) : (
            movies.map(movie => (
              <MovieItem movie={movie} key={movie.id} likeButton={likeButton} />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
};

MoviesList.propTypes = {
  getAllMovies: PropTypes.func.isRequired,
  movies_obj: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies_obj: state.movies_obj
});

export default connect(mapStateToProps, {
  getAllMovies,
  nextPage,
  prevPage,
  sort
})(MoviesList);

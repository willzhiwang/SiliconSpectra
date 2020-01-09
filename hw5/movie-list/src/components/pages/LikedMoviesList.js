import React, { Fragment } from "react";
import { connect } from "react-redux";
import LikedItem from "../LikedItem";
const LikedMoviesList = ({ movies_obj: { likedmovies } }) => {
  //console.log(likedmovies);
  return (
    <Fragment>
      <div className="homepage-item">
        <h1>Liked Movies List</h1>
        <div className="liked-movieslist">
          {likedmovies.map(movie => (
            <LikedItem movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  movies_obj: state.movies_obj
});

export default connect(mapStateToProps)(LikedMoviesList);

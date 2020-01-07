import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { removeLikedMovie, addBlockedMovie } from '../actions/moviesActions';
import { faBan, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieModal from './MovieModal';

const LikedItem = ({ movie, removeLikedMovie, addBlockedMovie }) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    let url = IMAGE_URL + movie.poster_path;

    return (
        <div className="flex-container">
            <div className="liked-item" >
                <img src={url} style={{ width: "100%", height: "auto" }} alt="pic"></img>
                <Button size="sm" color="secondary" onClick={() => addBlockedMovie(movie)}>
                    Block{" "}<FontAwesomeIcon icon={faBan} />

                </Button>
                <Button size="sm" color="warning" onClick={() => removeLikedMovie(movie)}>
                    Remove{" "}<FontAwesomeIcon icon={faTrashAlt} />
                </Button>
                {/* <h4 style={item_style}>{movie.title}</h4>
            <h5 style={item_style}>{movie.release_date}</h5> */}
                <MovieModal movie={movie} />

            </div>
        </div >
    )
}
LikedItem.propTypes = {
    movie: PropTypes.object.isRequired,
    removeLikedMovie: PropTypes.func.isRequired,
    addBlockedMovie: PropTypes.func.isRequired,
};
export default connect(null, { removeLikedMovie, addBlockedMovie })(LikedItem);

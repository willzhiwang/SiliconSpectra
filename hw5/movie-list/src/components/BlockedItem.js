import React, { } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { addLikedMovie, removeBlockedMovie } from '../actions/moviesActions';
import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieModal from './MovieModal';

const BlockedItem = ({ movie, addLikedMovie, removeBlockedMovie }) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    let url = IMAGE_URL + movie.poster_path;

    return (
        <div className="flex-container">

            <div className="liked-item" >
                <img src={url} style={{ width: "100%", height: "auto" }} alt="pic"></img>
                <Button color="danger" size="sm" onClick={() => addLikedMovie(movie)}>
                    Like{" "}<FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button color="warning" size="sm" onClick={() => removeBlockedMovie(movie)}>
                    Remove{" "}<FontAwesomeIcon icon={faTrashAlt} />
                </Button>
                <MovieModal movie={movie} />
                {/* <h4 style={item_style}>{movie.title}</h4>
            <h5 style={item_style}>{movie.release_date}</h5> */}
            </div>
        </div>
    )
}

BlockedItem.propTypes = {
    movie: PropTypes.object.isRequired,
    removeBlockedMovie: PropTypes.func.isRequired,
    addLikedMovie: PropTypes.func.isRequired,
}

export default connect(null, { addLikedMovie, removeBlockedMovie })(BlockedItem);

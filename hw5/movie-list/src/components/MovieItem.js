import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { addLikedMovie, addBlockedMovie } from '../actions/moviesActions';
import { faHeart, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const item_style = {
    padding: '5px 0 0 0',
}
const MovieItem = ({ movie, addLikedMovie, addBlockedMovie }) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    let url = IMAGE_URL + movie.poster_path;
    return (
        <div className="moive-item">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <img className="moive-img" src={url} style={{}} alt="pic"></img>
            </div>
            <div style={{ padding: '10px 0 0 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Button size="sm" color="danger" onClick={() => addLikedMovie(movie)}>
                    {movie.likeButton}{' '}
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button size="sm" color="secondary" onClick={() => addBlockedMovie(movie)}>
                    Block{' '}
                    <FontAwesomeIcon icon={faBan} />
                </Button>
            </div>
            <h4 style={item_style}>{movie.title}</h4>
            <h5 style={item_style}>{movie.release_date}</h5>
            <h6 style={item_style}>Original Title: {movie.original_title}</h6>
            <h6>Vote Count: {movie.vote_count}</h6>
            <h6>Vote Average: {movie.vote_average}</h6>
            <p >{movie.overview}</p>
        </div >
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    addLikedMovie: PropTypes.func.isRequired,
    addBlockedMovie: PropTypes.func.isRequired
};
export default connect(null, { addLikedMovie, addBlockedMovie })(MovieItem);


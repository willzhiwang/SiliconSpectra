import React, { Fragment } from 'react'
import BlockedItem from '../BlockedItem';
import { connect } from 'react-redux';

const BlockMoviesList = ({ movies_obj: { blockedmovies } }) => {
    //console.log(blockedmovies);
    return (
        <Fragment>
            <div className="homepage-item">
                <h1> Blocked Movies List</h1>
                <div className="liked-movieslist">
                    {(
                        blockedmovies.map(movie => <BlockedItem movie={movie} key={movie.id} />)
                    )}
                </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    movies_obj: state.movies_obj
});
export default connect(mapStateToProps)(BlockMoviesList);

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from './Sidebar';
import MoviesList from './pages/MoviesList';
import LikedMoviesList from './pages/LikedMoviesList';
import BlockMoviesList from './pages/BlockMoviesList';
import HomePage from './pages/HomePage';

class MovieList extends Component {
    state = {
        movies_objs: [],
        page: 1,
        isOpen: false
    }

    menuHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        return (
            <Router>
                <SideBar isOpen={this.state.isOpen} menuHandler={this.menuHandler} />
                <div className="homepage">
                    <div
                        className="homepage-item" onClick={this.menuHandler} style={{
                            fontSize: 'x-large',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                        Movies List Menu
                        </div>
                    <Switch>
                        <Route exact path='/'>
                            <HomePage />
                        </Route>
                        <Route exact path='/movieslist'>
                            <MoviesList />
                        </Route>
                        <Route exact path='/likedmovieslist'>
                            <LikedMoviesList />
                        </Route>
                        <Route exact path='/blockedmovieslist'>
                            <BlockMoviesList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default MovieList;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Sidebar";
import MoviesList from "./pages/MoviesList";
import LikedMoviesList from "./pages/LikedMoviesList";
import BlockMoviesList from "./pages/BlockMoviesList";
import HomePage from "./pages/HomePage";

const MovieList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <SideBar isOpen={isOpen} menuHandler={menuHandler} />
      <div className="homepage">
        <div
          className="homepage-item"
          onClick={menuHandler}
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Movies List Menu
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movieslist">
            <MoviesList />
          </Route>
          <Route exact path="/likedmovieslist">
            <LikedMoviesList />
          </Route>
          <Route exact path="/blockedmovieslist">
            <BlockMoviesList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default MovieList;

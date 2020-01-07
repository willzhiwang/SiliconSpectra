import { GET_ALL_MOVIES, MOVIES_LOADING, GET_TOTAL_PAGES, SET_SORT, GET_MOVIES_ERRORS, CHANGE_PAGE, ADD_LIKED_MOVIES, ADD_BLOCKED_MOVIES } from './types';
import axios from 'axios';
export const getAllMovies = () => (dispatch, getState) => {
    try {
        const currentpage = getState().movies_obj.page;
        const blockedmovies = getState().movies_obj.blockedmovies;
        const likedmovies = getState().movies_obj.likedmovies;
        let current_movies_list = getState().movies_obj.movies;
        //console.log("from state ", current_movies_list);
        const sort = getState().movies_obj.sort;
        setLoading();
        const API_KEY = '66730ff65883e16b04d141e728064251';
        const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=en-US&region=US&sort_by=' + sort + '&include_adult=false&include_video=false&page=' + currentpage;
        //console.log(sort);
        let response = axios(URL).then((data) => {
            //console.log(data.data);
            let movies_list = data.data.results;
            for (let m of movies_list) {
                m.likeButton = "Like   ";
            }
            if (movies_list !== []) {
                for (const b of blockedmovies) {
                    movies_list = movies_list.filter(movie => movie.id !== b.id);
                }
                let liked_buttons = likedmovies.filter(item => JSON.stringify(movies_list).includes(JSON.stringify(item)));
                //console.log("liked buttons ", liked_buttons)
                for (let m of movies_list) {
                    if (JSON.stringify(liked_buttons).includes(JSON.stringify(m))) {
                        m.likeButton = "Liked ";
                    }
                    else {
                        m.likeButton = "Like   ";
                    }
                }
            }
            //console.log("liked: ", liked_buttons);
            if (JSON.stringify(current_movies_list) === JSON.stringify(movies_list)) {
                //console.log("movies are the same as state");
            }
            else {
                dispatch({
                    type: GET_ALL_MOVIES,
                    payload: movies_list
                });
            }
            //console.log("-------------------------------------------");
        });
        //get all pages
        // const totalpages = data.total_pages;
        // dispatch({
        //     type: GET_TOTAL_PAGES,
        //     payload: totalpages
        // });
    }
    catch (error) {
        console.log("error...", error);
        dispatch({
            type: GET_MOVIES_ERRORS,
            payload: error.response
        });
    }
};

export const sort = (type) => (dispatch, getState) => {
    let currentType = getState().movies_obj.sort;
    //const type;
    if (type === "title") {
        let asc = getState().movies_obj.title_asc;
        if (currentType === "original_title.asc") {
            currentType = "original_title.desc";
        }
        else if (currentType === "original_title.desc") {
            currentType = "original_title.asc";
        }
        else {
            if (asc === true) {
                currentType = "original_title.asc";
            }
            if (asc === false) {
                currentType = "original_title.desc";
            }
        }
    }
    if (type === "voteC") {
        let asc = getState().movies_obj.voteC_asc;
        if (currentType === "vote_count.asc") {
            currentType = "vote_count.desc";
        }
        else if (currentType === "vote_count.desc") {
            currentType = "vote_count.asc";
        }
        else {
            if (asc === false) {
                currentType = "vote_count.asc";
            }
            if (asc === true) {
                currentType = "vote_count.desc";
            }
        }
    }
    else if (type === "voteA") {
        let asc = getState().movies_obj.voteA_asc;
        if (currentType === "vote_average.asc") {
            currentType = "vote_average.desc";
        }
        else if (currentType === "vote_average.desc") {
            currentType = "vote_average.asc";
        }
        else {
            if (asc === false) {
                currentType = "vote_average.asc";
            }
            if (asc === true) {
                currentType = "vote_average.desc";
            }
        }
    }
    else if (type === "date") {
        let asc = getState().movies_obj.releaseDate_asc;
        if (currentType === "primary_release_date.asc") {
            currentType = "primary_release_date.desc";
        }
        else if (currentType === "primary_release_date.desc") {
            currentType = "primary_release_date.asc";
        }
        else {
            if (asc === false) {
                currentType = "primary_release_date.asc";
            }
            if (asc === true) {
                currentType = "primary_release_date.desc";
            }
        }
    }
    try {
        dispatch({
            type: SET_SORT,
            payload: currentType
        });
    }
    catch (e) {
        console.log(e);
    }

};

//set movie loading
export const setLoading = () => {
    //console.log("loading...");
    return {
        types: MOVIES_LOADING
    };
};

export const nextPage = () => (dispatch, getState) => {
    //console.log("next page...");
    const currentpage = getState().movies_obj.page;
    if (getState().movies_obj.page < 500) {
        dispatch({
            type: CHANGE_PAGE,
            payload: currentpage + 1
        });
    }
};
export const prevPage = () => (dispatch, getState) => {
    const currentpage = getState().movies_obj.page;
    if (getState().movies_obj.page > 1) {
        dispatch({
            type: CHANGE_PAGE,
            payload: currentpage - 1
        });
    }
};

export const addLikedMovie = (movieNew) => (dispatch, getState) => {
    const likedmovies = getState().movies_obj.likedmovies;
    let blockedmovies = getState().movies_obj.blockedmovies;

    if (likedmovies.some(movie => movie.id === movieNew.id)) {
        alert("existed in liked list");
    }
    else {
        if (blockedmovies.some(movie => movie.id === movieNew.id)) {
            blockedmovies = blockedmovies.filter(movie => movie.id !== movieNew.id)
            //console.log('blockedmovies:', blockedmovies);
            dispatch({
                type: ADD_BLOCKED_MOVIES,
                payload: blockedmovies
            });
        }
        likedmovies.push(movieNew);
        dispatch({
            type: ADD_LIKED_MOVIES,
            payload: likedmovies
        });
    }
};
export const removeLikedMovie = (movieRemove) => (dispatch, getState) => {
    let likedmovies = getState().movies_obj.likedmovies;
    console.log(likedmovies);
    try {
        likedmovies = likedmovies.filter(movie => movie.id !== movieRemove.id);
        dispatch({
            type: ADD_LIKED_MOVIES,
            payload: likedmovies
        });
    }
    catch (error) {
        console.log("removing error", error);
    }
};
export const addBlockedMovie = (movieNew) => (dispatch, getState) => {
    let likedmovies = getState().movies_obj.likedmovies;
    //console.log('likedmovies:', likedmovies);
    const blockedmovies = getState().movies_obj.blockedmovies;

    if (blockedmovies.some(movie => movie.id === movieNew.id)) {
        alert("existed in blocked list");
    }
    else {
        if (likedmovies.some(movie => movie.id === movieNew.id)) {
            likedmovies = likedmovies.filter(movie => movie.id !== movieNew.id);
            //console.log('likedmovies:', likedmovies);
            dispatch({
                type: ADD_LIKED_MOVIES,
                payload: likedmovies
            });
        }
        blockedmovies.push(movieNew);
        //console.log("blocked: ", blockedmovies);
        dispatch({
            type: ADD_BLOCKED_MOVIES,
            payload: blockedmovies
        });
    }
};

export const removeBlockedMovie = (movieRemove) => (dispatch, getState) => {
    let blockedmovies = getState().movies_obj.blockedmovies;
    console.log(blockedmovies);
    try {
        blockedmovies = blockedmovies.filter(movie => movie.id !== movieRemove.id);
        dispatch({
            type: ADD_BLOCKED_MOVIES,
            payload: blockedmovies
        });
    }
    catch (error) {
        console.log("removing error", error);
    }
};

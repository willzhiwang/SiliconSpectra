let request = new XMLHttpRequest();
const API_KEY = '66730ff65883e16b04d141e728064251';
let page = 1;
let movies = "";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
let mySet = new Set();
let div_liked = document.createElement("div");
div_liked.id = "div_liked";
div_liked.style.display = "flex";
div_liked.style.flexDirection = "row";
div_liked.style.alignItems = "center";
div_liked.style.flexWrap = "wrap";

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
}
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
}

getData();
prev = () => {
    if (page == 1) {
        document.querySelector('#prev').innerText = 'No More';
        document.getElementById("prev").disabled = true;
    }

    if (page > 1) {
        document.getElementById("prev").disabled = false;
        if (page == 2) {
            document.querySelector('#prev').innerText = 'No More';
            document.getElementById("prev").disabled = true;
        }
        page--;
        document.getElementById("movies").innerHTML = "";
        getData();
    }
}
next = () => {
    if (page != 500) {
        page++;
        document.getElementById("movies").innerHTML = "";
        document.querySelector('#prev').innerText = 'Prev';
        document.getElementById("prev").disabled = false;
        document.getElementById("loader").style.display = "block";
        getData();
    }
    else {
        document.querySelector('#next').innerText = 'Next';
        document.getElementById("next").disabled = false;
    }
}


loading = () => {

}

function getData() {
    request.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page, true);
    request.onload = function () {
        const data = JSON.parse(this.response);
        document.getElementById("pages").innerHTML = "page " + page + "/ Total " + data.total_pages + " of results " + data.total_results;


        document.getElementById("container").style.display = "block";


        if (request.status == 200) {
            //console.log(data);
            document.getElementById("loader").style.display = "none";

            movies = data.results;
            for (let movie in movies) {
                if (movies.hasOwnProperty(movie)) {
                    let cur_movie = movies[movie];

                    let div = document.createElement("div");
                    div.id = "movie" + movie;

                    let div_hover = document.createElement("div");
                    div_hover.id = "div_hover";
                    div_hover.className = "div_hover";
                    div_hover.style.display = "flex";
                    div_hover.style.flexDirection = "column";
                    div_hover.style.alignItems = "start";
                    div_hover.style.flexWrap = "wrap";
                    div_hover.style.margin = "0px 10px";

                    let img = document.createElement("img");
                    img.className = "img";
                    img.src = IMAGE_URL + cur_movie.poster_path;
                    img.style.textAlign = "center";
                    img.style.alignItems = "center";
                    img.style.alignContent = "center";
                    div_hover.appendChild(img);
                    let img1 = img.cloneNode(true);
                    let img2 = img.cloneNode(true);

                    let div_slide = document.createElement("div");
                    div_slide.className = "div_slide";
                    div_slide.id = "div_slide";
                    div_slide.style.alignContent = "start";
                    //div_slide.style.position = "absolute";

                    let like = document.createElement("button");
                    like.className = "like";
                    like.id = "like";
                    like.style.alignItems = "start";
                    like.innerHTML = "Like it";

                    div_slide.appendChild(like);

                    div_hover.appendChild(div_slide);
                    div.appendChild(div_hover);


                    let title = document.createElement("h4");
                    title.innerHTML = cur_movie.title;
                    title.style.alignContent = "center";
                    title.style.alignItems = "center";
                    title.style.marginTop = "5px";
                    div.appendChild(title);
                    let title2 = title.cloneNode(true);


                    let date = document.createElement("P");
                    date.innerHTML = cur_movie.release_date;
                    date.style.marginTop = "-20px";
                    div.appendChild(date);
                    let date2 = date.cloneNode(true);

                    div.style.display = "flex";
                    div.style.flexDirection = "column";
                    div.style.alignItems = "center";
                    div.style.flexWrap = "wrap";
                    div.style.width = "20%";

                    document.getElementById("movies").appendChild(div);
                    img.onclick = () => {
                        imgClick(cur_movie, img1);
                    }
                    like.onclick = () => {
                        console.log(title2);
                        if (mySet.has(title2)) {
                            console.log("existed");
                        }
                        else {
                            mySet.add(title2);
                            likeClick(img2, title2, date2, div_liked, mySet);
                        }
                        //console.log(mySet);
                        document.getElementById("count").innerHTML = mySet.size;
                    }
                }
            }
        } else {
            console.log('error')
        }
    }
    request.send();
}

likeClick = (img, title, date, div_liked, mySet) => {

    //console.log(img, title, date);
    document.getElementById("likedlist").style.visibility = "visible";

    let movie_div = document.createElement("div");
    movie_div.className = "liked_movie";
    movie_div.style.display = "flex";
    movie_div.style.flexDirection = "column";
    movie_div.style.alignItems = "center";
    movie_div.style.flexWrap = "wrap";
    movie_div.style.width = "20%";
    img.style.width = "230px";
    movie_div.appendChild(img);
    movie_div.appendChild(title);
    movie_div.appendChild(date);

    div_liked.appendChild(movie_div);

    document.getElementById("likedlist").onclick = (mySet) => {
        //console.log(div_liked);
        //document.getElementById("popular_movies").style.visibility = "hidden";
        document.getElementById("popular_movies").style.display = "none";
        document.getElementById("liked_movies").style.display = "flex";
        document.getElementById("config").style.visibility = "visible";

        document.getElementById("config").onclick = (mySet) => {
            console.log(mySet);
            configClick(mySet, title);
        }
        document.getElementById("likedlist").style.textDecoration = "underline red";
        document.getElementById("likedlist").style.textD
        document.getElementById("movieslist").style.textDecoration = "";

        document.getElementById("liked_movies").appendChild(div_liked);
    }
    document.getElementById("movieslist").onclick = () => {
        document.getElementById("popular_movies").style.display = "";
        document.getElementById("liked_movies").style.display = "none";
        document.getElementById("likedlist").style.textDecoration = "";
        document.getElementById("movieslist").style.textDecoration = "underline red";
    }
    title.className = "config_names";

    let title_div = document.createElement("div");
    title_div.className = "title_div";

    let title3 = title.cloneNode(true);
    title3.style.padding = "15px";
    title3.className = "title_div";

    //title_div.appendChild(title3)
    title_div.draggable = "true";
    title3.draggable = "true";

    document.getElementById("config_tags").appendChild(title3);
};
configClick = (mySet, title) => {
    document.getElementById("close-icon").style.display = "block";
    document.getElementById("info").style.display = "none";
    document.getElementById("config_tags").style.display = "flex";
    document.getElementById("config_tags").style.position = "fixed";
    document.getElementById("config_tags").style.flexDirection = "column";
    document.getElementById("config_tags").style.justifyContent = "center"
    document.getElementById("config_tags").style.alignItems = "center";
    document.getElementById("config_tags").style.top = "";
    document.getElementById("config_tags").style.flexWrap = "wrap";
    document.getElementById("config_tags").style.height = "100%";
    document.getElementById("config_tags").style.width = "80%";

    document.getElementById("close-icon").onclick = () => {
        let cc = document.getElementById("config_tags").children;
        let lc = document.getElementById("div_liked").children;
        let moviesArray = [];
        let lc_array = [];
        for (i = 0; i < cc.length; i++) {
            moviesArray.push(cc[i].innerHTML);
        }
        lc_array.length = moviesArray.length;
        //console.log(lc_array.length);
        for (i = 0; i < lc.length; i++) {

            for (j = 0; j < moviesArray.length; j++) {
                if (lc[i].textContent.includes(moviesArray[j])) {
                    //console.log(lc[i].innerHTML + ", index: " + j);
                    lc_array[j] = lc[i].innerHTML;
                }
            }
        }
        //console.log(moviesArray);
        //console.log(lc_array);

        document.getElementById("div_liked").innerHTML = "";
        for (let index in lc_array) {
            console.log(lc_array[index]);
            let movie_div = document.createElement("div");
            movie_div.className = "liked_movie";
            movie_div.style.display = "flex";
            movie_div.style.flexDirection = "column";
            movie_div.style.alignItems = "center";
            movie_div.style.flexWrap = "wrap";
            movie_div.style.width = "20%";
            movie_div.innerHTML = lc_array[index];
            console.log(movie_div);
            document.getElementById("div_liked").appendChild(movie_div);
        }

        document.getElementById("info").style.display = "";
        document.getElementById("config_tags").style.display = "none";
        document.getElementById("close-icon").style.display = "none";
    }
}

imgClick = (cur_movie, img) => {
    document.getElementById("container").style.display = "none";
    document.getElementById("loader").style.display = "block";
    if (document.readyState === 'complete') {
        console.log("ready");
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
    }
    //loading();
    //setTimeout(showPage, 200);
    console.log(img);

    document.getElementById("info").style.pointerEvents = "none";

    backdrop_url = IMAGE_URL + cur_movie.backdrop_path;

    let newdiv = document.createElement("div");
    newdiv.id = "newdiv";

    newdiv.style.position = "fixed";
    newdiv.style.top = "20px";
    newdiv.style.display = "flex";
    newdiv.style.flexDirection = "column";
    newdiv.style.alignItems = "center";
    newdiv.style.flexWrap = "wrap";
    newdiv.style.width = "100%";
    newdiv.style.height = "auto";

    let background = document.createElement("div");
    background.id = "backgrounds";
    background.style.width = "83%";
    background.style.minHeight = "60vh";
    background.style.backgroundSize = "contain";
    background.style.display = "flex";
    background.style.flexDirection = "row";
    background.style.justifyContent = "flex-start";
    background.style.alignContent = "center";
    background.style.flexWrap = "wrap";
    background.style.backgroundImage = "url(" + backdrop_url + ")";
    background.style.backgroundRepeat = "no-repeat";

    let backbtn = document.createElement("h4");
    backbtn.id = "backbtn";
    backbtn.innerHTML = "CLOSE";
    backbtn.style.fontSize = "large";
    backbtn.style.opacity = "0.4"
    backbtn.style.marginLeft = "90%";
    backbtn.style.marginBottom = "3%";
    backbtn.style.cursor = 'pointer';

    backbtn.onclick = () => {
        document.getElementById("info").style.opacity = "1";
        document.getElementById("info").style.pointerEvents = "auto";
        newdiv.parentNode.removeChild(newdiv);
    }
    newdiv.appendChild(backbtn);
    newdiv.appendChild(background);

    img.style.height = "528px";
    img.style.margin = "60px 50px";
    background.appendChild(img);

    let div2 = document.createElement("div");
    div2.id = "div2";

    let div3 = document.createElement("div");
    div3.id = "div3";
    div3.style.width = "570px";
    div2.style.margin = "60px";

    let div4 = document.createElement("div");
    div4.id = "div4";
    div4.style.display = "flex";
    div4.style.flexDirection = "row";
    div4.style.padding = "0px";
    let title = document.createElement("h1");
    let year = (cur_movie.release_date).substring(0, 4);
    div3.style.color = "white";
    title.innerHTML = cur_movie.title + "(" + year + ")";
    //title.style.marginLeft = "5px";

    let genres = cur_movie.genre_ids;
    //console.log(genres);

    let overview = document.createElement("p");
    overview.innerHTML = "Overview: " + cur_movie.overview;

    let productions = document.createElement("div");
    productions.id = "productions";
    productions.style.height = "100px";
    productions.style.margin = "50px 0";
    productions.style.display = "flex";
    productions.style.justifyContent = "flex-start";
    productions.style.alignContent = "center";
    productions.style.flexWrap = "wrap";

    //productions.style.width = "50px";
    productions.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    div3.appendChild(title);
    genres.forEach((genreid, index) => {
        let genre_div = document.createElement("div");
        genre_div.style.margin = "10px";
        genre_div.style.padding = "5px 10px";
        genre_div.style.borderRadius = "10px";

        let color = genre_color[genreid.toString()];
        genre_div.style.backgroundColor = color;

        genre_div.id = "genre" + index;
        genreName = genre_map[genreid.toString()];
        genre_div.innerHTML = genreName;
        div4.append(genre_div);

        //console.log(cur_movie.id);
    });
    let details_url = "https://api.themoviedb.org/3/movie/" + cur_movie.id + "?api_key=" + API_KEY + "&language=en-US";
    //console.log(details_url);
    getProduction(details_url, productions);

    div3.appendChild(div4);
    div3.appendChild(overview);
    div3.appendChild(productions);
    div2.appendChild(div3);

    background.appendChild(div2);

    document.getElementById("info").style.opacity = "0.1";
    document.getElementById("container").appendChild(newdiv);
    document.getElementById("backbtn").onmouseover = function () {
        this.style.opacity = "1";
    }
    document.getElementById("backbtn").onmouseleave = function () {
        this.style.opacity = "0.4";
    }

    document.getElementById("backgrounds").style.backgroundSize = "100%";
}

getProduction = (url, productions) => {
    request.open('GET', url, true);
    request.onload = function () {
        const data = JSON.parse(this.response);
        if (request.status == 200) {
            pros = data.production_companies;
            pros.forEach(function (pro, index) {
                //console.log(pro);

                if (pro.logo_path) {
                    company_url = IMAGE_URL + pro.logo_path
                    //console.log(company_url);

                    let img = document.createElement("img");
                    img.id = "companyImg" + index;
                    img.src = company_url;
                    img.style.minHeight = "50px";
                    img.style.maxHeight = "60px";
                    img.style.minWidth = "60px";
                    img.style.maxWidth = "180px";
                    img.style.padding = "0 5px";
                    productions.appendChild(img);
                }
                else {
                    let pro_div = document.createElement("p");
                    pro_div.id = "company" + index;
                    pro_div.style.padding = "0px 5px";
                    pro_div.style.alignContent = "center";
                    pro_div.style.alignItems = "center";
                    //console.log(pro.name);
                    pro_div.innerHTML = pro.name;
                    productions.appendChild(pro_div);
                }

            });
        } else {
            console.log('error')
        }
    }
    request.send();
}

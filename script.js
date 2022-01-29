"use strict";

const numberOfFilms = +prompt("how many films have you watched");
//console.log(typeof(numberOfFilms));

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("Last watched movie", '');
const b = prompt("Rate?", '');
const c = prompt("Last watched movie", '');
const d = prompt("Rate?", '');

personalMoviDB.movies[a] = b;
personalMoviDB.movies[c] = d;
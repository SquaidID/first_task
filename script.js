"use strict";

let numberOfFilms;
//console.log(typeof(numberOfFilms));

function start(){
    numberOfFilms = +prompt("how many films have you watched");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("how many films have you watched");
    }
}

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Last watched movie", '');
        const b = prompt("Rate?", '');
        if (a != null && b != null && a != '' && b != '' && a.length<50){
            personalMoviDB.movies[a] = b;
        }else{
            i--;
        }
        
        console.log(a);
        console.log(b);
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMoviDB.count < 10){
        alert("МАЛА");
    } else if(personalMoviDB.count < 30){
        alert("НОРМ");
    }else if(personalMoviDB.count >= 30){
        alert("МНОГА");
    }else{
        alert("ERROR");
    }
}

detectPersonalLevel();

function showMyDB(){
    if (personalMoviDB.private == false){
        console.log(personalMoviDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        const num = +prompt(`Любимый жанр под номером ${i}`);
        personalMoviDB.genres[i-1] = num;        
    }
}


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
console.log(personalMoviDB);

if (personalMoviDB.count < 10){
    alert("МАЛА");
} else if(personalMoviDB.count < 30){
    alert("НОРМ");
}else if(personalMoviDB.count >= 30){
    alert("МНОГА");
}else{
    alert("ERROR");
}
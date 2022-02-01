"use strict";

const personalMoviDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start(){
        this.count = +prompt("how many films have you watched");
    
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt("how many films have you watched");
        }
    },

    detectPersonalLevel(){
        if (this.count < 10){
            alert("МАЛА");
        } else if(this.count < 30){
            alert("НОРМ");
        }else if(this.count >= 30){
            alert("МНОГА");
        }else{
            alert("ERROR");
        }
    },

    writeYourGenres(){
        for (let i = 1; i <= 3; i++) {
            let genre = +prompt(`Любимый жанр под номером ${i}`);
            if(genre === '' || genre == null){
                console.log("не кекай");
                i--;
            }else{
                this.genres[i-1] = genre;       
            } 
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    showMyDB(){
        if (personalMoviDB.private == false){
            console.log(this);
        }
    },

    rememberMyFilms(){
        for (let i = 0; i < 2; i++) {
            const a = prompt("Last watched movie", '');
            const b = prompt("Rate?", '');
            if (a != null && b != null && a != '' && b != '' && a.length<50){
                this.movies[a] = b;
            }else{
                i--;
            }
            
            console.log(a);
            console.log(b);
        }
    },

    toggleVisibleMyDB(){
        this.private = !this.private;
    }


};

personalMoviDB.start();
personalMoviDB.detectPersonalLevel();
personalMoviDB.toggleVisibleMyDB();
personalMoviDB.showMyDB();
console.log(personalMoviDB.count);












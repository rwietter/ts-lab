"use strict";
/** conjunto de dados para descrever a estrutura de objetos */
/** a interface trabalha exclusivamente sob objetos */
/** podemos implementar classes a partir de interfaces de objetos */
var film = {
    title: "The Martian",
    description: "The Martian is a science fiction",
    genre: 'Science fiction',
    // plataform: ['Netflix', 'HBO', 'YouTube'],
    getSimilars: function (title) { return console.log(title + " is a very good film!"); }
};
if (film.getSimilars) {
    film.getSimilars(film.title); /** Type guards => certificar-se que a propriedade não é undefined */
}
var spaceFilm = {
    title: "Interstellar",
    description: "is a movie",
    genre: 'and genre is Science fiction',
    LostOnMars: film,
};
var Title = spaceFilm.title, description = spaceFilm.description, genre = spaceFilm.genre;
console.log(Title, description, genre);
/* -------------------------------------------- */
/* Generate class at interface
/* -------------------------------------------- */
var CreateMovie = /** @class */ (function () {
    function CreateMovie(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateMovie;
}());

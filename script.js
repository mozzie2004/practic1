/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''
);
let copersonalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
let favoriteFilm1 = prompt('Один из последних просмотренных фильмов?', ''
);
let mark1 = prompt('На сколько оцените его?', ''
);
let favoriteFilm2 = prompt('Один из последних просмотренных фильмов?', ''
);
let mark2 = prompt('На сколько оцените его?', ''
);
copersonalMovieDB.movies.favoriteFilm1 = mark1;
copersonalMovieDB.movies.favoriteFilm2 = mark2;

console.log(copersonalMovieDB);
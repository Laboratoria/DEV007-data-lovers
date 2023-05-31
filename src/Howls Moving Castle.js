// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[12].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[12].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[12].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[12].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[12].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('howl'); 
personajes.src = listaPeliculas[12].people[0].img; 
var personajes = document.getElementById('nombreHowl'); 
personajes.innerHTML = listaPeliculas[12].people[0].name;
   
var personajes = document.getElementById('sophie'); 
personajes.src = listaPeliculas[12].people[1].img; 
var personajes = document.getElementById('nombreSophie'); 
personajes.innerHTML = listaPeliculas[12].people[1].name;

var personajes = document.getElementById('calcifer'); 
personajes.src = listaPeliculas[12].people[3].img; 
var personajes = document.getElementById('nombreCalcifer'); 
personajes.innerHTML = listaPeliculas[12].people[3].name;

var personajes = document.getElementById('prince'); 
personajes.src = listaPeliculas[12].people[5].img; 
var personajes = document.getElementById('nombrePrince'); 
personajes.innerHTML = listaPeliculas[12].people[5].name;

var personajes = document.getElementById('madame'); 
personajes.src = listaPeliculas[12].people[6].img; 
var personajes = document.getElementById('nombreMadame'); 
personajes.innerHTML = listaPeliculas[12].people[6].name;

var personajes = document.getElementById('heen'); 
personajes.src = listaPeliculas[12].people[7].img; 
var personajes = document.getElementById('nombreHeen'); 
personajes.innerHTML = listaPeliculas[12].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[12].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[12].producer;  


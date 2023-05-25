// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[1].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[1].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[1].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[1].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[1].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('satsuki'); 
personajes.src = listaPeliculas[1].people[0].img; 
var personajes = document.getElementById('nombreSatsuki'); 
personajes.innerHTML = listaPeliculas[1].people[0].name;
   
var personajes = document.getElementById('mei'); 
personajes.src = listaPeliculas[1].people[1].img; 
var personajes = document.getElementById('nombreMei'); 
personajes.innerHTML = listaPeliculas[1].people[1].name;

var personajes = document.getElementById('totoro'); 
personajes.src = listaPeliculas[1].people[6].img; 
var personajes = document.getElementById('nombreTotoro'); 
personajes.innerHTML = listaPeliculas[1].people[6].name;

var personajes = document.getElementById('chu'); 
personajes.src = listaPeliculas[1].people[7].img; 
var personajes = document.getElementById('nombreChu'); 
personajes.innerHTML = listaPeliculas[1].people[7].name;

var personajes = document.getElementById('chibi'); 
personajes.src = listaPeliculas[1].people[8].img; 
var personajes = document.getElementById('nombreChibi'); 
personajes.innerHTML = listaPeliculas[1].people[8].name;

var personajes = document.getElementById('catbus'); 
personajes.src = listaPeliculas[1].people[9].img; 
var personajes = document.getElementById('nombreCatbus'); 
personajes.innerHTML = listaPeliculas[1].people[9].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[1].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[1].producer;  


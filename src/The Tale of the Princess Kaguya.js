// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[18].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[18].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[18].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[18].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[18].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('kaguya'); 
personajes.src = listaPeliculas[18].people[0].img; 
var personajes = document.getElementById('nombreKaguya'); 
personajes.innerHTML = listaPeliculas[18].people[0].name;
   
var personajes = document.getElementById('sutemaru'); 
personajes.src = listaPeliculas[18].people[1].img; 
var personajes = document.getElementById('nombreSutemaru'); 
personajes.innerHTML = listaPeliculas[18].people[1].name;

var personajes = document.getElementById('miyatsuko'); 
personajes.src = listaPeliculas[18].people[3].img; 
var personajes = document.getElementById('nombreMiyatsuko'); 
personajes.innerHTML = listaPeliculas[18].people[3].name;

var personajes = document.getElementById('menowarawa'); 
personajes.src = listaPeliculas[18].people[4].img; 
var personajes = document.getElementById('nombreMenowarawa'); 
personajes.innerHTML = listaPeliculas[18].people[4].name;

var personajes = document.getElementById('lady'); 
personajes.src = listaPeliculas[18].people[5].img; 
var personajes = document.getElementById('nombreLady'); 
personajes.innerHTML = listaPeliculas[18].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[18].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[18].producer;  


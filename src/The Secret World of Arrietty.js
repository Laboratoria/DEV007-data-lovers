// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[15].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[15].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[15].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[15].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[15].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('karigurashi'); 
personajes.src = listaPeliculas[15].people[0].img; 
var personajes = document.getElementById('nombreKarigurashi'); 
personajes.innerHTML = listaPeliculas[15].people[0].name;
   
var personajes = document.getElementById('sho'); 
personajes.src = listaPeliculas[15].people[1].img; 
var personajes = document.getElementById('nombreSho'); 
personajes.innerHTML = listaPeliculas[15].people[1].name;

var personajes = document.getElementById('spiller'); 
personajes.src = listaPeliculas[15].people[5].img; 
var personajes = document.getElementById('nombreSpiller'); 
personajes.innerHTML = listaPeliculas[15].people[5].name;

var personajes = document.getElementById('pod'); 
personajes.src = listaPeliculas[15].people[6].img; 
var personajes = document.getElementById('nombrePod'); 
personajes.innerHTML = listaPeliculas[15].people[6].name;

var personajes = document.getElementById('niya'); 
personajes.src = listaPeliculas[15].people[7].img; 
var personajes = document.getElementById('nombreNiya'); 
personajes.innerHTML = listaPeliculas[15].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[15].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[15].producer;  


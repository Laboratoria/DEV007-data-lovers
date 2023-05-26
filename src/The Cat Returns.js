// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[11].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[11].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[11].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[11].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[11].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('renaldo'); 
personajes.src = listaPeliculas[11].people[0].img; 
var personajes = document.getElementById('nombreRenaldo'); 
personajes.innerHTML = listaPeliculas[11].people[0].name;
   
var personajes = document.getElementById('cat'); 
personajes.src = listaPeliculas[11].people[1].img; 
var personajes = document.getElementById('nombreCat'); 
personajes.innerHTML = listaPeliculas[11].people[1].name;

var personajes = document.getElementById('yuki'); 
personajes.src = listaPeliculas[11].people[2].img; 
var personajes = document.getElementById('nombreYuki'); 
personajes.innerHTML = listaPeliculas[11].people[2].name;

var personajes = document.getElementById('haru'); 
personajes.src = listaPeliculas[11].people[3].img; 
var personajes = document.getElementById('nombreHaru'); 
personajes.innerHTML = listaPeliculas[11].people[3].name;

var personajes = document.getElementById('prince'); 
personajes.src = listaPeliculas[11].people[6].img; 
var personajes = document.getElementById('nombrePrince'); 
personajes.innerHTML = listaPeliculas[11].people[6].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[11].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[11].producer;  


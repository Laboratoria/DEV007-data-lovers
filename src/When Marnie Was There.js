// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[19].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[19].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[19].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[19].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[19].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('marnie'); 
personajes.src = listaPeliculas[19].people[0].img; 
var personajes = document.getElementById('nombreMarnie'); 
personajes.innerHTML = listaPeliculas[19].people[0].name;
   
var personajes = document.getElementById('anna'); 
personajes.src = listaPeliculas[19].people[1].img; 
var personajes = document.getElementById('nombreAnna'); 
personajes.innerHTML = listaPeliculas[19].people[1].name;

var personajes = document.getElementById('emily'); 
personajes.src = listaPeliculas[19].people[2].img; 
var personajes = document.getElementById('nombreEmily'); 
personajes.innerHTML = listaPeliculas[19].people[2].name;

var personajes = document.getElementById('yoriko'); 
personajes.src = listaPeliculas[19].people[6].img; 
var personajes = document.getElementById('nombreYoriko'); 
personajes.innerHTML = listaPeliculas[19].people[6].name;

var personajes = document.getElementById('sayaka'); 
personajes.src = listaPeliculas[19].people[7].img; 
var personajes = document.getElementById('nombreSayaka'); 
personajes.innerHTML = listaPeliculas[19].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[19].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[19].producer;  


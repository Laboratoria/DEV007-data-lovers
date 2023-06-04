// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

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

let personajes = document.getElementById('marnie'); 
personajes.src = listaPeliculas[19].people[0].img; 
personajes = document.getElementById('nombreMarnie'); 
personajes.innerHTML = listaPeliculas[19].people[0].name;
   
personajes = document.getElementById('anna'); 
personajes.src = listaPeliculas[19].people[1].img; 
personajes = document.getElementById('nombreAnna'); 
personajes.innerHTML = listaPeliculas[19].people[1].name;

personajes = document.getElementById('emily'); 
personajes.src = listaPeliculas[19].people[2].img; 
personajes = document.getElementById('nombreEmily'); 
personajes.innerHTML = listaPeliculas[19].people[2].name;

personajes = document.getElementById('yoriko'); 
personajes.src = listaPeliculas[19].people[6].img; 
personajes = document.getElementById('nombreYoriko'); 
personajes.innerHTML = listaPeliculas[19].people[6].name;

personajes = document.getElementById('sayaka'); 
personajes.src = listaPeliculas[19].people[7].img; 
personajes = document.getElementById('nombreSayaka'); 
personajes.innerHTML = listaPeliculas[19].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[19].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[19].producer;  


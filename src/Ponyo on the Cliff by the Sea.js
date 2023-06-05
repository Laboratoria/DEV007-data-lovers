// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[14].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[14].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[14].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[14].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[14].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('sosuke'); 
personajes.src = listaPeliculas[14].people[0].img; 
personajes = document.getElementById('nombreSosuke'); 
personajes.innerHTML = listaPeliculas[14].people[0].name;
   
personajes = document.getElementById('brunhilde'); 
personajes.src = listaPeliculas[14].people[1].img; 
personajes = document.getElementById('nombreBrunhilde'); 
personajes.innerHTML = listaPeliculas[14].people[1].name;

personajes = document.getElementById('fujimoto'); 
personajes.src = listaPeliculas[14].people[3].img; 
personajes = document.getElementById('nombreFujimoto'); 
personajes.innerHTML = listaPeliculas[14].people[3].name;

personajes = document.getElementById('granmammare'); 
personajes.src = listaPeliculas[14].people[4].img; 
personajes = document.getElementById('nombreGranmammare'); 
personajes.innerHTML = listaPeliculas[14].people[4].name;

personajes = document.getElementById('lisa'); 
personajes.src = listaPeliculas[14].people[5].img; 
personajes = document.getElementById('nombreLisa'); 
personajes.innerHTML = listaPeliculas[14].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[14].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[14].producer;  


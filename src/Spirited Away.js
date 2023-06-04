// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[10].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[10].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[10].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[10].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[10].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('chihiro'); 
personajes.src = listaPeliculas[10].people[0].img; 
personajes = document.getElementById('nombreChihiro'); 
personajes.innerHTML = listaPeliculas[10].people[0].name;
   
personajes = document.getElementById('haku'); 
personajes.src = listaPeliculas[10].people[1].img; 
personajes = document.getElementById('nombreHaku'); 
personajes.innerHTML = listaPeliculas[10].people[1].name;

personajes = document.getElementById('yubaba'); 
personajes.src = listaPeliculas[10].people[2].img; 
personajes = document.getElementById('nombreYubaba'); 
personajes.innerHTML = listaPeliculas[10].people[2].name;

personajes = document.getElementById('no-Face'); 
personajes.src = listaPeliculas[10].people[4].img; 
personajes = document.getElementById('nombreNo-Face'); 
personajes.innerHTML = listaPeliculas[10].people[4].name;

personajes = document.getElementById('lin'); 
personajes.src = listaPeliculas[10].people[5].img; 
personajes = document.getElementById('nombreLin'); 
personajes.innerHTML = listaPeliculas[10].people[5].name;

personajes = document.getElementById('boh'); 
personajes.src = listaPeliculas[10].people[6].img; 
personajes = document.getElementById('nombreBoh'); 
personajes.innerHTML = listaPeliculas[10].people[6].name;

personajes = document.getElementById('zeniba'); 
personajes.src = listaPeliculas[10].people[7].img; 
personajes = document.getElementById('nombreZeniba'); 
personajes.innerHTML = listaPeliculas[10].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[10].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[10].producer;  


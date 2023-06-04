// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[16].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[16].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[16].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[16].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[16].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('umi'); 
personajes.src = listaPeliculas[16].people[0].img; 
personajes = document.getElementById('nombreUmi'); 
personajes.innerHTML = listaPeliculas[16].people[0].name;
   
personajes = document.getElementById('shun'); 
personajes.src = listaPeliculas[16].people[1].img; 
personajes = document.getElementById('nombreShun'); 
personajes.innerHTML = listaPeliculas[16].people[1].name;

personajes = document.getElementById('sora'); 
personajes.src = listaPeliculas[16].people[3].img; 
personajes = document.getElementById('nombreSora'); 
personajes.innerHTML = listaPeliculas[16].people[3].name;

personajes = document.getElementById('shirou'); 
personajes.src = listaPeliculas[16].people[4].img; 
personajes = document.getElementById('nombreShirou'); 
personajes.innerHTML = listaPeliculas[16].people[4].name;

personajes = document.getElementById('riku'); 
personajes.src = listaPeliculas[16].people[6].img; 
personajes = document.getElementById('nombreRiku'); 
personajes.innerHTML = listaPeliculas[16].people[6].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[16].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[16].producer;  


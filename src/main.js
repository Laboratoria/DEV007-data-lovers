//import { example } from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.js';
import { dataAthletes, dataAthletes } from './data.js';
import dataAthletes from './data/athletes/athletes.js';



Object.keys(data.athletes).forEach((gender) => {
    const element = data.athletes[gender];
    console.log([element.gender]);
  });
 for (let i = 0; i < data.athletes.length; i++){
 console.log([data.athletes[i].name]);
 }

 const data = document.getElementById(data.athletes)
const botondeportes = document.getElementById(data.boton-deportes)

botondeportes.addEventListener("click", function(){
})


//console.log(example, data);

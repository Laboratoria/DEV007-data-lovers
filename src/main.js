//import { dataAthletesData, dataAthletesFilter } from "./data.js"
import data from './data/athletes/athletes.js'
//console.log (data.athletes[0].name)
 
const contenedor = document.getElementById('contenedor')
const athletes = data.athletes
//console.log(athletes)

data.athletes.forEach((i) => {
console.log(i)
  contenedor.innerHTML += `<div class= datosAtletas>
  <p>Name: ${i.name}</p>
  <p>Sport: ${i.sport}</p>
  <p>Team: ${i.team}</p>
  <p>Medal: ${i.medal}</p>
  </div>`
});























/*const dataAthletes = () => {
  // Obtener referencias al elemento del DOM donde salen los resultados
  const contenedor = document.getElementById('contenedor')
console.log(data.athletes.name)
  // sacar el arreglo de atletas de los datos importados
  const athletes = data.athletes.name


  // Crear el HTML para mostrar todos los atletas
  const athletesHTML = athletes.map(athlete => {
    return `<div class= datosAtletas>
            <p>Name: ${athlete.name}</p>
            <p>Sport: ${athlete.sport}</p>
            <p>Team: ${athlete.team}</p>
            <p>Medal: ${athlete.medal}</p>
          </div>`
  })

  // Inserta el HTML en el contenedor
  resultsContainer.innerHTML = athletesHTML.join('')
}

botonPais.addEventListener('click', function () {
  contenedor.innerHTML = ''
  team.forEach(team => {
    contenedor.innerHTML=(
      <div class='contenedor-pais'>
        <h2>${data.athletes.team}</h2>`;
      </div>
    )
  })
})

(data.athletes).forEach((name) => {
    const element = data.athletes[name];
    console.log([data.athletes]);
  });
 for (let i = 0; i < data.athletes.length; i++){
 console.log([data.athletes[i].name]);}
 const name= document.getElementById(data.athletes)
 const buscarNombres = document.getElementById(data.buscarNombre)
 buscador-por-nombre.addEventListener("click", function()
};*/

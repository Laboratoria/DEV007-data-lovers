import data from './data/athletes/athletes.js'

// AQUI ORDENAMIENTO DE  FUNCIONES
const contenedor = document.getElementById('contenedor')
const botonDeportes = document.getElementById('boton-deportes')
const botonPais = document.getElementById('boton-pais')

const sport = data.athletes.filter(sport => {
  return data.athletes === 'sport'
})

const team = data.athletes.filter(team => {
  return data.athletes === 'team'
})
botonDeportes.addEventListener('click', function () {
  contenedor.innerHTML = ''
  sport.forEach(sport => {
    contenedor.innerHTML = (
      <div class='contenedor-sport'>
        <li>${data.athletes.team}</li>`;
      </div>
    )
  })
})

botonPais.addEventListener('click', function () {
  contenedor.innerHTML = ''
  team.forEach(team => {
    contenedor.innerHTML = (
      <div class='contenedor-pais'>
        <h2>${data.athletes.team}</h2>`;
      </div>
    )
  })
})

Object.keys(data.athletes).forEach((name) => {
    const element = data.athletes[name];
    console.log([data.athletes]);
  });
 for (let i = 0; i < data.athletes.length; i++){
 console.log([data.athletes[i].name]);}
 const name= document.getElementById(data.athletes)
 const buscarNombres = document.getElementById(data.buscarNombre)
 buscador-por-nombre.addEventListener("click", function()
}

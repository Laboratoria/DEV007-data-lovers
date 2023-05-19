import data from './data/athletes/athletes.js'

//funcion para mostrar la data
function mostrarAtletas () {
  const contenedor = document.getElementById('contenedor')
  const athletes = data.athletes.slice(0 - 50)

  athletes.forEach(i => {
    //console.log(i)
    contenedor.innerHTML += `<div class= datosAtletas>
                           <p>Name: ${i.name}</p>
                           <p>Sport: ${i.sport}</p>
                           <p>Team: ${i.team}</p>
                           <p>Medal: ${i.medal}</p>
                           </div>`
  })
}

//traer a los botones principales
const botonPrincipalDeportes = document.getElementById('botonDeportes')
const botonPrincipalPaises = document.getElementById('botonPais')
const contenidoGeneral = document.getElementById('contenidoGeneral')

//funcionalidad a los botones principales
botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  mostrarAtletas()
})

botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  filtrarPaises()
})

//filtrar por deportes
function filtrarDeportes () {
  const contenedorDeportes = document.getElementById('contenedorDeportes')
  const deportesUnicos = new Set()

  data.athletes.forEach(i => {
    deportesUnicos.add(i.sport)
  })

  deportesUnicos.forEach(deporte => {
    contenedorDeportes.innerHTML += `<div class="cartasDeportes">
    <button class= "clase-botondeportes"> ${deporte}</button>
  </div>`
  })
}

//filtrar por paises
function filtrarPaises () {
  const contenedorPaises = document.getElementById('contenedorPaises')
  const paisesUnicos = new Set()

  data.athletes.forEach(i => {
    paisesUnicos.add(i.team)
  })

  paisesUnicos.forEach(equipo => {
    contenedorPaises.innerHTML += `<div class="cartasPaises">
    <button class="clase-botonpais"> ${equipo}</button>
  </div>`
  })
}

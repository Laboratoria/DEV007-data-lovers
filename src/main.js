import data from './data/athletes/athletes.js'

//funcion para mostrar la data
function mostrarAtletas () {
  const contenedor = document.getElementById('contenedor')
  const athletes = data.athletes.slice(0 - 50)
  athletes.forEach(i => {
    //console.log(i)
    //limita la cantidad de athletes a mostrar
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
const contenedorDeportes = document.getElementById('contenedorDeportes')
const contenedorPaises = document.getElementById('contenedorPaises')
const contenedor = document.getElementById('contenedor')

//funcionalidad a los botones principales

botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedor.innerHTML = ''
  filtrarDeportes()
  const botonesDeportes = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener('click', function (e) {
      console.log(e.target.textContent)
    })
  }
})

botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorDeportes.innerHTML = ''
  contenedor.innerHTML = ''
  filtrarPaises()
  const botonesPais = document.getElementsByClassName('cartasPaises')
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      console.log(e.target.textContent)
    })
  }
})

//filtrar por deportes
function filtrarDeportes () {
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

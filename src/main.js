import data from './data/athletes/athletes.js'

//constante que almacena la data
const athletes = data.athletes

//funcion para mostrar la data
function mostrarAtletas () {
  const contenedor = document.getElementById('contenedor')

  athletes.forEach(i => {
    
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
const contenedorAtletasPorPais = document.getElementById(
  'contenedorAtletasPorPais'
)
const contenerdorAtletasPorDeporte = document.getElementById(
  'contenerdorAtletasPorDeporte'
)
const contenedorAtletasPorPais = document.getElementById ('contenedorAtletasPorPais')
const contenedorAtletasPorDeporte = document.getElementById ('contenedorAtletasPorDeporte')



//funcionalidad a  boton principal deportes
botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorPaises.innerHTML = ''
  contenedor.innerHTML = ''
  filtrarDeportes()
  const botonesDeportes = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener('click', function (e) {
      console.log(e.target.textContent)
    })
  }
})
  // funcionalidad para cada boton por pais
  const botonesDeporte = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeporte.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      const deporte = e.target.getAttribute('data-deporte') //obtener el pais cuando le hacen

      filtrarAtletasPorDeporte(deporte) //pasar pais como argumento en la llamada a la funcion
    })
  }
})

//funcionalidad a  boton principal PAISES
botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = '';
  contenedorDeportes.innerHTML = '';
  contenedor.innerHTML = '';
  contenedorAtletasPorDeporte.innerHTML ='';
  contenedorAtletasPorPais.innerHTML ='';
  filtrarPaises()

  // funcionalidad para cada boton por pais
  const botonesPais = document.getElementsByClassName('cartasPaises')
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      const pais = e.target.getAttribute('data-pais') //obtener el pais cuando le hacen

      filtrarAtletasPorPais(pais) //pasar pais como argumento en la llamada a la funcion
    })
  }
})

//funcion para filtrar atletas por pais
function filtrarAtletasPorPais (pais) {
  const atletasFiltrados = athletes.filter(atleta => atleta.team === pais)
  console.log(atletasFiltrados)

  contenedorPaises.innerHTML = '' // Limpiar el contenido existente antes de agregar los atletas filtrados
  contenedorAtletasPorPais.innerHTML = ''

  atletasFiltrados.forEach(atleta => {
    contenedorAtletasPorPais.innerHTML += `<div class= datosAtletas >
                                          <p>Name: ${atleta.name}</p>
                                          <p>Sport: ${atleta.sport}</p>
                                          <p>Team: ${atleta.team}</p>
                                          <p>Medal: ${atleta.medal}</p>
                                          </div>`
  })
}

//filtrar por deportes
function filtrarDeportes () {
  const deportesUnicos = new Set()

  data.athletes.forEach(i => {
    deportesUnicos.add(i.sport)
  })

  deportesUnicos.forEach(deporte => {
    contenedorDeportes.innerHTML += `<div class="cartasDeportes">
    <button class= "clase-botondeportes"> ${deporte}">${deporte}</button>
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
    <button class="clase-botonpais" data-pais="${equipo}">${equipo}</button>
  </div>`
  })
}
//funcion para filtrar atletas por pais
function filtrarAtletasPorDeporte (deporte) {
  const atletasFiltrados = athletes.filter(atleta => atleta.sport === deporte)
  console.log(atletasFiltrados)

  contenedorDeportes.innerHTML = '' // Limpiar el contenido existente antes de agregar los atletas filtrados
  contenedorAtletasPorPais.innerHTML = ''

  atletasFiltrados.forEach(atleta => {
    contenerdorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
                                          <p>Name: ${atleta.name}</p>
                                          <p>Sport: ${atleta.sport}</p>
                                          <p>Team: ${atleta.team}</p>
                                          <p>Medal: ${atleta.medal}</p>
                                          </div>`
  })
}

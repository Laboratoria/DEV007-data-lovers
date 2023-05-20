import data from './data/athletes/athletes.js'

//constante que almacena la data
const athletes = data.athletes

//funcion para mostrar la data
function mostrarAtletas () {
  const contenedor = document.getElementById('contenedor')

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
const contenedorAtletasPorPais = document.getElementById ('contenedorAtletasPorPais')


//funcionalidad a  boton principal deportes
botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorPaises.innerHTML =''
  contenedor.innerHTML = ''
  filtrarDeportes()
  const botonesDeportes = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener('click', function (e) {
      console.log(e.target.textContent)
    })
  }
})

//funcionalidad a  boton principal paises
botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorDeportes.innerHTML = ''
  contenedor.innerHTML = ''
  filtrarPaises()

// funcionalidad para cada boton por pais 
  const botonesPais = document.getElementsByClassName('cartasPaises')
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      const equipo = e.target.textContent //obtener el pais cuando le hacen
    
      filtrarAtletasPorPais(equipo)
    })
  } 
})

//funcion para filtrar atletas por pais
function filtrarAtletasPorPais(equipo) {
  const atletasFiltrados = athletes.filter(atleta => atleta.team === equipo);
  
  console.log(atletasFiltrados);

atletasFiltrados.forEach(atleta => {
  contenedorAtletasPorPais.innerHTML += `<div >
                                          <p>Name: ${atleta.name}</p>
                                          <p>Sport: ${atleta.sport}</p>
                                          <p>Team: ${atleta.team}</p>
                                          <p>Medal: ${atleta.medal}</p>
                                        </div>`;
});
}



















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



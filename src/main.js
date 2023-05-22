import data from './data/athletes/athletes.js'

//constante que almacena la data
const athletes = data.athletes;

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
const contenedorAtletasPorDeporte = document.getElementById ('contenedorAtletasPorDeporte')

//funcionalidad a  boton principal DEPORTES
botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorPaises.innerHTML =''
  contenedor.innerHTML = ''
  filtrarDeportes()

  //funcionalidad por cada boton por DEPORTE
  const botonesDeportes = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener('click', function (e) {
      const deporte = e.target.getAttribute('data-deporte') //obtener el DEPORTE cuando le hacen 
      
      filtrarAtletasPorDeporte(deporte);//pasar pais como argumento en la llamada a la funcion  
    })
  }
})

//funcion para filtrar atletas por DEPORTE
function filtrarAtletasPorDeporte(deporte) {
  const atletasFiltradosPorDeporte = athletes.filter(atleta => atleta.sport === deporte);
  

  contenedorDeportes.innerHTML = ""; // Limpiar el contenido existente antes de agregar los atletas filtrados
  contenedorAtletasPorDeporte.innerHTML = "";
 

atletasFiltradosPorDeporte.forEach(atleta => {
  
  contenedorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
                                          <p>Name: ${atleta.name}</p>
                                          <p>Sport: ${atleta.sport}</p>
                                          <p>Team: ${atleta.team}</p>
                                          <p>Medal: ${atleta.medal}</p>
                                          </div>`;
});

}




//funcionalidad a  boton principal PAISES
botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = ''
  contenedorDeportes.innerHTML = ''
  contenedor.innerHTML = ''
  filtrarPaises()

// funcionalidad para cada boton por PAIS 
  const botonesPais = document.getElementsByClassName('cartasPaises')
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      const pais = e.target.getAttribute('data-pais') //obtener el pais cuando le hacen 
      
      filtrarAtletasPorPais(pais);//pasar pais como argumento en la llamada a la funcion 
    })
  } 
})

//funcion para filtrar atletas por PAIS
function filtrarAtletasPorPais(pais) {
  const atletasFiltrados = athletes.filter(atleta => atleta.team === pais);


  contenedorPaises.innerHTML = ""; // Limpiar el contenido existente antes de agregar los atletas filtrados
  contenedorAtletasPorPais.innerHTML = "";
 

atletasFiltrados.forEach(atleta => {
  
  contenedorAtletasPorPais.innerHTML += `<div class= datosAtletas >
                                          <p>Name: ${atleta.name}</p>
                                          <p>Sport: ${atleta.sport}</p>
                                          <p>Team: ${atleta.team}</p>
                                          <p>Medal: ${atleta.medal}</p>
                                          </div>`;
});

}













//filtrar por DEPORTES
function filtrarDeportes () {
  const deportesUnicos = new Set()

  data.athletes.forEach(i => {
    deportesUnicos.add(i.sport)
  })

  deportesUnicos.forEach(deporte => {
    contenedorDeportes.innerHTML += `<div class="cartasDeportes">
    <button class= "clase-botondeportes" data-deporte="${deporte}"> ${deporte}</button>
  </div>`
  })
}

//filtrar por PAISES
function filtrarPaises () {
  const paisesUnicos = new Set()

  data.athletes.forEach(i => {
    paisesUnicos.add(i.team)
  })

  paisesUnicos.forEach(equipo => {
    contenedorPaises.innerHTML +=  `<div class="cartasPaises">
    <button class="clase-botonpais" data-pais="${equipo}">${equipo}</button>
  </div>`
  })
}



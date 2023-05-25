import data from './data/athletes/athletes.js'
import { filtrarPaises , filtrarDeportes , filtrarAtletasPorPais , filtrarAtletasPorDeporte , ordenarAtletas  } from './data.js';


//constante que almacena la data
const athletes = data.athletes;

//funcion para mostrar la data
function mostrarAtletas () {
  const contenedor = document.getElementById('contenedor')

  athletes.forEach(i => {

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

//------------------------------------------------------------------------------------------------------------------------------
//filtrar por PAISES
function mostrarPaises () {
  const paisesUnicos= filtrarPaises (data) //llamar a la funcion del data.js

  paisesUnicos.forEach(equipo => {
    contenedorPaises.innerHTML +=  `<div class="cartasPaises">
    <button class="clase-botonpais" data-pais="${equipo}">${equipo}</button>
  </div>`
  })
}

//funcionalidad a  boton principal PAISES
botonPrincipalPaises.addEventListener('click', () => {
  contenidoGeneral.innerHTML = '';
  contenedorDeportes.innerHTML = '';
  contenedor.innerHTML = '';
  contenedorAtletasPorDeporte.innerHTML ='';
  contenedorAtletasPorPais.innerHTML ='';
  contenedorPaises.innerHTML ='';
  mostrarPaises()

// funcionalidad para cada boton por PAIS 
  const botonesPais = document.getElementsByClassName('cartasPaises');
  for (let i = 0; i < botonesPais.length; i++) {
    botonesPais[i].addEventListener('click', function (e) {
      const pais = e.target.getAttribute('data-pais') //obtener el pais cuando le hacen click 
      
      mostrarAtletasPorPais(pais);//pasar pais como argumento en la llamada a la funcion 
    })
  } 
})


// Función para filtrar atletas por PAIS y ordenar A-Z / Z-A
function mostrarAtletasPorPais(pais) {
  const atletasFiltrados = filtrarAtletasPorPais(athletes, pais);

  contenedorPaises.innerHTML = ""; // Limpiar los botones de los paises antes de agregar los atletas filtrados

  // Generar dinámicamente el select para ordenar A-Z / Z-A 
  contenedorAtletasPorPais.innerHTML += `
    <select id="ordenAtletasPais">
      <option disabled selected value="">Ordenar</option>
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
    </select>`;

  // Generar dinámicamente las tarjetas de cada atleta sin ordenar
  atletasFiltrados.forEach(atleta => {
    contenedorAtletasPorPais.innerHTML += `
      <div class="datosAtletas">
        <p><strong>Name:</strong> ${atleta.name}</p>
        <p><strong>Sport:</strong> ${atleta.sport}</p>
        <p><strong>Team:</strong> ${atleta.team}</p>
        <p><strong>Medal:</strong> ${atleta.medal}</p>
      </div>`;
  });

  contenedorAtletasPorPais.addEventListener('change', event => {
    if (event.target.id === 'ordenAtletasPais') {
      const ordenType = event.target.value;
      const atletasOrdenados = ordenarAtletas(atletasFiltrados, ordenType);

      const tarjetasAtletas = contenedorAtletasPorPais.querySelectorAll('.datosAtletas');
      tarjetasAtletas.forEach(tarjeta => {
        tarjeta.remove(); // Eliminar las tarjetas existentes
      });

      // Generar dinámicamente las nuevas tarjetas ordenadas
      atletasOrdenados.forEach(atleta => {
        contenedorAtletasPorPais.innerHTML += `
          <div class="datosAtletas">
            <p><strong>Name:</strong> ${atleta.name}</p>
            <p><strong>Sport:</strong> ${atleta.sport}</p>
            <p><strong>Team:</strong> ${atleta.team}</p>
            <p><strong>Medal:</strong> ${atleta.medal}</p>
          </div>`;
      });
    }
  });
}








//--------------------------------------------------------------------------------------------------------------------------------------------------
//filtrar por DEPORTES
function mostrarDeportes () {
  const deportesUnicos = filtrarDeportes (data)

  deportesUnicos.forEach(deporte => {
    contenedorDeportes.innerHTML += `<div class="cartasDeportes">
    <button class= "clase-botondeportes" data-deporte="${deporte}"> ${deporte}</button>
  </div>`
  })
}


//funcionalidad a  boton principal DEPORTES
botonPrincipalDeportes.addEventListener('click', () => {
  contenidoGeneral.innerHTML = '';
  contenedorPaises.innerHTML ='';
  contenedor.innerHTML = '';
  contenedorAtletasPorPais. innerHTML ='';
  contenedorAtletasPorDeporte.innerHTML ='';
  contenedorDeportes.innerHTML = '';
  mostrarDeportes()

  //funcionalidad por cada boton por DEPORTE
  const botonesDeportes = document.getElementsByClassName('cartasDeportes')
  for (let i = 0; i < botonesDeportes.length; i++) {
    botonesDeportes[i].addEventListener('click', function (e) {
      const deporte = e.target.getAttribute('data-deporte') //obtener el DEPORTE cuando le hacen click

      mostrarAtletasPorDeporte(deporte);//pasar deporte como argumento en la llamada a la funcion  
    })
  }
})

//funcion para filtrar atletas por DEPORTE 
function mostrarAtletasPorDeporte(deporte) {
   const atletasFiltradosPorDeporte = filtrarAtletasPorDeporte (athletes,deporte)

  contenedorDeportes.innerHTML = ""; // Limpiar el contenido existente antes de agregar los atletas filtrados

//generar dinamicamente las tarjetas de cada atleta 
atletasFiltradosPorDeporte.forEach(atleta => {
  contenedorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
                                          <p><strong>Name:</strong> ${atleta.name}</p>
                                          <p><strong>Sport:</strong> ${atleta.sport}</p>
                                          <p><strong>Team:</strong> ${atleta.team}</p>
                                          <p><strong>Medal:</strong> ${atleta.medal}</p>
                                          </div>`;
});

}


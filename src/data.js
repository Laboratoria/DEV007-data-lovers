import athletes from "./data/athletes/athletes";

export { dataAthletesFilter }
const dataAthletesFilterSport = () => {
return propiedad= dataAthletesFilter
};
export { dataAthletesFilter }
const dataAthletesFilterTeam = () => {
return propiedad = dataAthletesFilter
};
export { dataAthletesFilter }
const dataAthletesFilterMedal= () => {
return propiedad= dataAthletesFilter
};
export let filterSport= (data, sport)
  const deportes= data.filter(deportes=>deportes.sport===deporte)

{
  return deportes
};
export let filterAthletesPorDeporte =(athletes, sport)
const atletasFiltrados = athletes.filter(atleta => atleta.sport === deporte)
{
  return atletasFiltrados
};


const botonesDeportes = document.getElementsByClassName('cartasDeportes')
for (let i = 0; i < botonesDeportes.length; i++) {
  botonesDeportes[i].addEventListener('click', function (e) {
    const deporte = e.target.getAttribute('data-deporte')

    filtrarAtletasPorDeporte(deporte) //pasar deporte como argumento en la llamada a la funcion
  })
}
/*funcionalidad para cada boton por deporte
const botonesDeporte = document.getElementsByClassName('cartasDeportes')
for (let i = 0; i < botonesDeportes.length; i++) {
  botonesDeportes[i].addEventListener('click', function (e) {
    const deporte = e.target.getAttribute('data-deporte')
    
    filtrarAtletasPorDeporte(deporte);//pasar pais como argumento en la llamada a la funcion 
  })
} 
})

//funcion para filtrar atletas por deporte
function filtrarAtletasPorDeporte(deporte) {
const atletasFiltrados = athletes.filter(atleta => atleta.sport === deporte);
console.log(atletasFiltrados)

contenedorDeportes.innerHTML = ""; // Limpiar el contenido que clikie antes
contenerdorAtletasPorDeporte.innerHTML = "";

atletasFiltrados.forEach(atleta => {

contenerdorAtletasPorDeporte.innerHTML += `<div class= datosAtletas >
                                        <p>Name: ${atleta.name}</p>
                                        <p>Sport: ${atleta.sport}</p>
                                        <p>Team: ${atleta.team}</p>
                                        <p>Medal: ${atleta.medal}</p>
                                        </div>`;
});

}*/*/
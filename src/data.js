export function filtrarPaises (data){
    const paisesUnicos = new Set()
    data.athletes.forEach(i => {
      paisesUnicos.add(i.team)
    }) 
    return paisesUnicos
}

export function filtrarDeportes (data){
    const deportesUnicos = new Set()
    data.athletes.forEach(i => {
    deportesUnicos.add(i.sport)
  }) 
  return deportesUnicos
}

export function filtrarAtletasPorPais (athletes , pais) {
    const atletasFiltrados = athletes.filter(atleta => atleta.team === pais);
    return atletasFiltrados 
}

export function filtrarAtletasPorDeporte (athletes , deporte){
    const atletasFiltradosPorDeporte = athletes.filter(atleta => atleta.sport === deporte);
    return atletasFiltradosPorDeporte
}



export function ordenarAtletas(atletas, orderType) { //la lista de atletas a ordenar y el tipo de ordenamiento como parametro
  const atletasOrdenados = Array.from(atletas); //se crea una copia de la lista de atletas para no modificar la original
  atletasOrdenados.sort((a, b) => { 
    const valueA = a.name.toUpperCase();
    const valueB = b.name.toUpperCase();

    if (orderType === 'ZA') {
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return atletasOrdenados;
}

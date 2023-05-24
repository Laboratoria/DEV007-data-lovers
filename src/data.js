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







export const sortData = (data, sortOrden) => {
  if (sortOrden === 'ASC') {
    data.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      }
      return 0
    })
  } else {
    data.sort((a, b) => {
      if (a.name > b.name) {
        return -1
      } else if (a.name < b.name) {
        return 1
      }
      return 0
    })
  }
  return data
}
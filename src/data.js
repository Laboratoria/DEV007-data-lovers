export function filtrarPaises (data) {
  const paisesUnicos = new Set()
  data.athletes.forEach(i => {
    paisesUnicos.add(i.team)
  })
  return paisesUnicos
}

export function filtrarDeportes (data) {
  const deportesUnicos = new Set()
  data.athletes.forEach(i => {
    deportesUnicos.add(i.sport)
  })
  return deportesUnicos
}

export function filtrarAtletasPorPais (athletes, pais) {
  const atletasFiltrados = athletes.filter(atleta => atleta.team === pais)
  return atletasFiltrados
}

export function filtrarAtletasPorDeporte (athletes, deporte) {
  const atletasFiltradosPorDeporte = athletes.filter(
    atleta => atleta.sport === deporte
  )
  return atletasFiltradosPorDeporte
}

export function ordenarAtletas (atletas, ordenSeleccionado) {
  const atletasOrdenados = atletas.slice() // Crear una copia de la lista de atletas con .slice
  atletasOrdenados.sort((a, b) => {
    //con .sort vamos a ordenar todo lo que este dentre de los {}
    const nombreA = a.name.toLowerCase() //asegurarnos que la comparacion sea insensible a mayusculas y minusculas
    const nombreB = b.name.toLowerCase()
    if (ordenSeleccionado === 'AZ') {
      //decimos como se deben comparar los nombres con el if con .localCompare
      return nombreA.localeCompare(nombreB) // Ordenar de A-Z
    } else {
      return nombreB.localeCompare(nombreA) // Ordenar de Z-A
    }
  })
  return atletasOrdenados
}

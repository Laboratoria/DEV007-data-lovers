export function filtrarPaises (data) {
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

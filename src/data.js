export function filtrarPaises (data) {
  const paisesUnicos = new Set()

  data.athletes.forEach(i => {
    paisesUnicos.add(i.team)
  })
  return paisesUnicos
}
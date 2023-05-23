
// filterData(data, condition)
export const filterData= (data, condition) =>{
const pokemonesFiltrados= data.filter((pokemon) => pokemon.type.includes(condition));
console.log(pokemonesFiltrados)
return pokemonesFiltrados;

}
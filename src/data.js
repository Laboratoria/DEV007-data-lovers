// // estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const filterDataByType= (data, condition) =>{
  const pokemonesFiltrados= data.filter((pokemon) => pokemon.type.includes(condition));
  console.log(pokemonesFiltrados)
  return pokemonesFiltrados;
  }
  
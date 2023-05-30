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

 export const sortData=(data,sortOrder) => {
  const ordenarAsc=data.sort((a,b) => { 
  let name1= a.name.toLowerCase()
  let name2= b.name.tolowerCase()
    if (sortOrder=== "asc") {

      if(name1<name2){

        return -1;
        }
    }
    
    if (sortOrder=== "desc") {

       if(name1>name2){

    return -1 ;

    }
  }
   return 0;
  })
 }

 console.log(data.sort((a,b)))
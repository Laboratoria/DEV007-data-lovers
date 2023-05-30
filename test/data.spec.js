
import { ordenarPokemones } from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js';




describe('ordenarPokemones', () => {
  
  it('deberia ser una funcion', () => {
    expect(typeof ordenarPokemones).toBe('function'); 
  });
  
  it('ordena a los pokemones en ascendente', () => {
    const tesOrdeN = ordenarPokemones("asc")
    expect(tesOrdeN[0].name).toBe("abra");
  });

});

describe('ordenarPokemones2', () => {
  it('ordena a los pokemones en descendente', () => {
    const testDescendente = ordenarPokemones("desc")
    expect(testDescendente[0].name).toBe("zubat");
  });
});





  

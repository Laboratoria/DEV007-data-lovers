
import { filterByType, findByName, ordenarPokemones } from '../src/data.js';
//import data from '../src/data/pokemon/pokemon.js';




describe('prueba para la funcion que ordena en ascendente', () => {
  
  it('deberia ser una funcion', () => {
    expect(typeof ordenarPokemones).toBe('function'); 
  });
  
  it('ordena a los pokemones en ascendente', () => {
    const tesOrdeN = ordenarPokemones("asc")
    expect(tesOrdeN[0].name).toBe("abra");
  });

});

describe('prueba para la funcion que ordena en descendente', () => {
  it('ordena a los pokemones en descendente', () => {
    const testDescendente = ordenarPokemones("desc")
    expect(testDescendente[0].name).toBe("zubat");
  });
});



describe("prueba para la funcion buscador findByName", () => {
  it("debe devolver el nombre del pokemon que coincida con la letra que se ingresa", () => {
    const inputs = [
      {
        "name": "golbat",
      },
      {
        "name": "bulbasaur",
      },
    ];

    const outputs = [
      {
        "name": "golbat",
      },
    ];
    expect(findByName(inputs, "go")).toEqual(outputs);
  }); 
});



describe("prueba para la funcion filtar a los pokemones por tipo", () => {
  const pruebaUno = [
    {
      "num": "058",
      "name": "growlithe",
      "type": [
        "fire"
      ],
    },
    {
      "num": "007",
      "name": "squirtle",
      "type": [
        "water"
      ],
    },
    {
      "num": "239",
      "name": "elekid",
      "type": [
        "electric"
      ],
    },
  ];

  it("probar si filterByType  devuelve un array con los pokemones que muestren su tipo que indica el usuario", () => {
    const pruebaDos = filterByType(pruebaUno, "fire");
      
    expect(pruebaDos).toEqual([
      {
        "num": "058",
        "name": "growlithe",
        "type": [
          "fire"
        ],
      },
    ]);
  });
});








  

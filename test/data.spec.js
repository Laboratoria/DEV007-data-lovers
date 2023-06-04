import { filterOrdenamiento, filterGeneration, filterData } from '../src/data.js';

describe("filterOrdenamiento", () => {
  it("Deberia ser una función", () => {
    expect(typeof filterOrdenamiento).toBe("function");
  });

  it("Ordenamiento de forma ascendente", () => {
    const ordenAscendente = filterOrdenamiento("A-Z");
    expect(ordenAscendente[0].name).toBe("abra");
  });
});

describe("filterOrdenamiento", () => {
  it("Ordenamiento de forma descendente", () => {
    const ordenDescendente = filterOrdenamiento("Z-A");
    expect(ordenDescendente[0].name).toBe("zubat");
  });
});



describe("filterGeneration", () => {
  const filtroGenero = {
    pokemon: [
      { name: "bulbasaur", generation: ["kanto"] },
      { name: "charizard", generation: ["kanto"] },
      { name: "chikorita", generation: ["johto"] },
      { name: "togepi", generation: ["johto"] },
    ],
  };

  it("Ordenamiento de por generacion", () => {
    const filtro = filterGeneration(filtroGenero, "kanto");
    expect(filtro).toEqual([
      {
        name: "bulbasaur",
        generation: ["kanto"],
      },
    ]);
  });
});



describe("filterData", () => {
  const filtroTipo = {
    pokemon: [
      { name: "bulbasaur", type: ["grass"] },
      { name: "psyduck", type: ["water"] },
      { name: "charmander", type: ["fire"] },
      { name: "raichu", type: ["electric"] },
    ],
  };

  it("Ordenamiento por tipo", () => {
    const filtrado = filterData(filtroTipo, "electric");
    expect(filtrado).toEqual([
      {
        name: "raichu",
        type: ["electric"],
      },
    ]);
  });
});

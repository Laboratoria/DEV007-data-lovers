import { filtrarPaises, filtrarDeportes , filtrarAtletasPorPais , filtrarAtletasPorDeporte , ordenarAtletas, sortData} from '../src/data.js';

//testear que filtrarPaises es una funcion
describe('filtrarPaises', () => {
  it('devuelve un conjunto vacío si no hay datos de atletas', () => {
    expect(typeof filtrarPaises).toBe('function');
  });
});
//test A - Z
test('Debería ser una función')
describe('Aplicación de tests para función ordenarAtletas', (atletas, ordenSeleccionado) => {
  it('El return de la función ordenarAtletas es de tipo: Objeto', () => {
    expect(typeof sortData(ordenarAtletas, 'ASC')).toBe('object')
  })
describe('Aplicación de tests para función sortData', () => {
  it('El return de la función sortData es de tipo: Objeto', () => {
    expect(typeof sortData(testData, 'ASC')).toBe('object');
  });
}));
import { filterCoaches, findCDP } from '../src/data.js';
import data from './../src/data/dev007/dev007.js'


describe('filtrarPaises', () => {
  test('Debería ser una función.', () => {
    expect(typeof filtrarPaises).toBe('function');
    
  })

  it('Filtra y devuelve a los paises.', () => {
    expect(filtrarPaises(data.athletes)).toEqual
  })

  it('Deberían ser ', () => {
    expect(filterCoaches(data.personas)).toHaveLength(3)
  })
})

describe('findCDP', () => {
  it('Debería devolverme a la CDP (Nicoooooooooooooooooooooooooooooooooooo :)).', () => {
    expect(findCDP(data.personas)).toHaveProperty('nombre', 'Nico');
  })
})
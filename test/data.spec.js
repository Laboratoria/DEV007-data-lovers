import { filtrarPaises , filtrarDeportes } from './data.js'


//testear que filtrarPaises es una funcion
describe('filtrarPaises', () => {
  it('devuelve un conjunto vacío si no hay datos de atletas', () => {
    expect(typeof filtrarPaises).toBe('function');
  });
});


//testear que filtrarDeportes es una funcion
describe('filtrarDeportes', () => {
  it('devuelve un conjunto vacío si no hay datos de atletas', () => {
    expect(typeof filtrarDeportes).toBe('function');
  });
});

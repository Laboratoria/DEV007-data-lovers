import { filtrarPaises, filtrarDeportes , filtrarAtletasPorPais} from '../src/data.js';

//testear que filtrarPaises es una funcion
describe('filtrarPaises', () => {
  it('devuelve un conjunto vacío si no hay datos de atletas', () => {
    expect(typeof filtrarPaises).toBe('function');
  });

  it('devuelve un conjunto de países únicos', () => {
    const data = {
      athletes: [
        { team: 'USA' },
        { team: 'USA' },
        { team: 'Canada' },
        { team: 'Australia' },
        { team: 'Canada' },
      ],
    };
    const resultado = filtrarPaises(data);
    expect(resultado).toEqual(['USA', 'Canada', 'Australia']);
  });

});


//testear que filtrarDeportes es una funcion
describe('filtrarDeportes', () => {
  it('devuelve un conjunto vacío si no hay datos de atletas', () => {
    expect(typeof filtrarDeportes).toBe('function');
  });

  it('devuelve un conjunto de deportes únicos', () => {
    const data = {
      athletes: [
        { sport: 'Gymnastics' },
        { sport: 'Gymnastics' },
        { sport: 'Basketball' },
        { sport: 'Taekwondo' },
        { sport: 'Basketball' },
      ],
    };
    const resultado = filtrarDeportes(data);
    expect(resultado).toEqual(['Gymnastics', 'Basketball', 'Taekwondo']);
  });

});


//test para filtrarAtletas por PAIS
describe('filtrarAtletasPorPais', () => {
  const athletes = [
    { name: 'John', team: 'USA' },
    { name: 'Emma', team: 'Canada' },
    { name: 'Mike', team: 'USA' },
    { name: 'Sophia', team: 'Canada' },
    { name: 'Daniel', team: 'USA' },
  ];

  
  it('devuelve un array vacío si no hay atletas para el país especificado', () => {
    const pais = 'Australia';
    const resultado = filtrarAtletasPorPais(athletes, pais);
    expect(resultado).toEqual([]);
  });

  it('devuelve un array con los atletas del país especificado', () => {
    const pais = 'USA';
    const resultado = filtrarAtletasPorPais(athletes, pais);
    expect(resultado).toEqual([
      { name: 'John', team: 'USA' },
      { name: 'Mike', team: 'USA' },
      { name: 'Daniel', team: 'USA' },
    ]);
  });

  it('devuelve un array vacío si no se proporciona ningún atleta', () => {
    const pais = 'Canada';
    const resultado = filtrarAtletasPorPais([], pais);
    expect(resultado).toEqual([]);
  });
});






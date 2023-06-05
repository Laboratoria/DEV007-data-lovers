import {ordenarPeliculasAZ, ordenarPeliculasZA, ordenarPeliculasAño, ordenarPeliculasPuntaje, calcularPeliculas} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

describe('ordenarPeliculasAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarPeliculasAZ).toBe('function');
  });

  it('la primera película debe ser Castle in the Sky', () => {
    expect(ordenarPeliculasAZ(data)[0]['title']).toBe("Castle in the Sky");
  });
});

describe('ordenarPeliculasZA', () => {
  it('is a function', () => {
    expect(typeof ordenarPeliculasZA).toBe('function');
  });

  it('la primera película debe ser Whisper of the Heart', () => {
    expect(ordenarPeliculasZA(data)[0]['title']).toBe("Whisper of the Heart");
  });
});

describe('ordenarPeliculasAño', () => {
  it('is a function', () => {
    expect(typeof ordenarPeliculasAño).toBe('function');
  });

  it('la última película debe ser del año 2014', () => {
    expect(ordenarPeliculasAño(data)[19]['release_date']).toBe("2014");
  });
});

describe('ordenarPeliculasPuntaje', () => {
  it('is a function', () => {
    expect(typeof ordenarPeliculasPuntaje).toBe('function');
  });

  it('la primera película debe ser Only Yesterday', () => {
    expect(ordenarPeliculasPuntaje(data)[0]['title']).toBe("Only Yesterday");
  });
});

describe('calcularPeliculas', () => {
  it('is a function', () => {
    expect(typeof calcularPeliculas).toBe('function');
  });

  it('returns `88.8`', () => {
    expect(calcularPeliculas(data)).toBe(88.8);
  });
});


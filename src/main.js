import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//

// traer json de la carpeta src/ghibli y guardarlo en una variable
import data from './data/ghibli/ghibli.js';
console.log(data.films[0].poster);

// inyectar los poster en el html
const poster0 = document.getElementById('posterCastleInTheSky');
poster0.src = data.films[0].poster;
const poster1 = document.getElementById('posterMyNeighborTotoro');
poster1.src = data.films[1].poster;
const poster2 = document.getElementById('posterKikisDeliveryService');
poster2.src = data.films[2].poster;
const poster3 = document.getElementById('posterGraveOfTheFireflies');
poster3.src = data.films[3].poster;
const poster4 = document.getElementById('posterOnlyYesterday');
poster4.src = data.films[4].poster;
const poster5 = document.getElementById('posterPorcoRosso');
poster5.src = data.films[5].poster;
const poster6 = document.getElementById('posterPomPoko');
poster6.src = data.films[6].poster;
const poster7 = document.getElementById('posterWhisperOfTheHeart');
poster7.src = data.films[7].poster;
const poster8 = document.getElementById('posterPrincessMononoke');
poster8.src = data.films[8].poster;
const poster9 = document.getElementById('posterMyNeighborsTheYamadas');
poster9.src = data.films[9].poster;
const poster10 = document.getElementById('posterSpiritedAway');
poster10.src = data.films[10].poster;
const poster11 = document.getElementById('posterTheCatReturns');
poster11.src = data.films[11].poster;
const poster12 = document.getElementById('posterHowlsMovingCastle');
poster12.src = data.films[12].poster;
const poster13 = document.getElementById('posterTalesFromEarthsea');
poster13.src = data.films[13].poster;
const poster14 = document.getElementById('posterPonyoOnTheCliffByTheSea');
poster14.src = data.films[14].poster;
const poster15 = document.getElementById('posterTheSecretWorldOfArrietty');
poster15.src = data.films[15].poster;
const poster16 = document.getElementById('posterFromUpOnPoppyHill');
poster16.src = data.films[16].poster;
const poster17 = document.getElementById('posterTheWindRises');
poster17.src = data.films[17].poster;
const poster18 = document.getElementById('posterTheTaleOfThePrincessKaguya');
poster18.src = data.films[18].poster;
const poster19 = document.getElementById('posterWhenMarnieWasThere');
poster19.src = data.films[19].poster;
import '../styles/index.scss';
import mockData from './data/data';
import Pokemon from './pokemon/pokemon';
import 'jquery';
import 'popper.js';
import 'bootstrap';

export const pokemon = new Pokemon(
    "#playground", 
    mockData
);

pokemon.init();

window.moveLeft = (pokemonName) => { pokemon.moveLeft(pokemonName); };
window.moveRight = (pokemonName) => { pokemon.moveRight(pokemonName); };
window.moveUp = (pokemonName) => { pokemon.moveUp(pokemonName); };
window.moveDown = (pokemonName) => { pokemon.moveDown(pokemonName); };


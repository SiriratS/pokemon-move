import * as d3 from 'd3';
export default class Pokemon {

    constructor(
        selectElement,
        data
    ) {
        this.step = 5;
        this.data = data;
        this.mainElement = d3.select(selectElement).append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .append("g");
    }

    init() {
        this.callPokemon();
    };

    callPokemon() {
        this.mainElement.selectAll()
            .data(this.data)
            .enter()
            .append('image')
            .attr('id', (data) => data.name)
            .attr('xlink:href', (data) => data.img)
            .attr('x', (data) => data.position.x)
            .attr('y', (data) => data.position.y)
            .attr('height', 100)
            .attr('width', 100);
    }

    moveRight(pokemonName) {
        const pokemon = this.mainElement.select('#'+ pokemonName);
        const currentX = pokemon.attr('x');

        pokemon.attr('x', (+currentX) + this.step);
    }

    moveLeft(pokemonName) {
        const pokemon = this.mainElement.select('#'+ pokemonName);
        const currentX = pokemon.attr('x');

        pokemon.attr('x', (+currentX) - this.step);
    }   
    
    moveUp(pokemonName) {
        const pokemon = this.mainElement.select('#'+ pokemonName);
        const currentY = pokemon.attr('y');

        pokemon.attr('y', (+currentY) - this.step);
    } 
    
    moveDown(pokemonName) {
        const pokemon = this.mainElement.select('#'+ pokemonName);
        const currentY = pokemon.attr('y');

        pokemon.attr('y', (+currentY) + this.step);
    }      

};
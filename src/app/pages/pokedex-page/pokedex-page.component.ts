import { Component } from '@angular/core';
import { Pokemon } from '../../shared/models/pokedex.model';
import { POKEMONS } from '../../shared/pokemons-mock';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
pokemonList: Pokemon[] = POKEMONS;
selectedPokemon: Pokemon = {} as Pokemon;

constructor() {}

onSelectPokemon(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon; // set the selectedPokemon property to the pokemon that was passed in
}
}

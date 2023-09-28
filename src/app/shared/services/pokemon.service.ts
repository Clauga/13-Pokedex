import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokedex.model';
import { POKEMONS } from '../pokemons-mock';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 private pokemonList: Pokemon[] = POKEMONS;

 getPokemons(): Pokemon[] {
  return this.pokemonList;
 }

 addPokemon(newPokemon: Pokemon): void {
this.pokemonList.push(newPokemon);
 }
}

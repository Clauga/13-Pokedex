import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../shared/models/pokedex.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] = [];
  @Output() selectPokemon = new EventEmitter<Pokemon>();

  constructor() { }

  onSelect(pokemon: Pokemon): void {
    this.selectPokemon.emit(pokemon);
  }
}

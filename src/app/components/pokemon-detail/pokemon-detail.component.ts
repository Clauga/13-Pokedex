import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/models/pokedex.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;

  constructor() { }
}

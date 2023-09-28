import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Pokemon } from '../../shared/models/pokedex.model';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent {
  pokemon: Pokemon = { name: '', imgUrl: '', description: '' };
  

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.pokemonService.addPokemon(this.pokemon);
      this.router.navigate(['/']);
    }
    };
  }


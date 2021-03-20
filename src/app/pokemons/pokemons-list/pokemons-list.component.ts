import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../pokemons.service';
import { Pokemons } from '../pokemons';




@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemons;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(): void {
    this.pokemonsService.getAllPokemons().subscribe(
      (data) => this.pokemons = data);
  }


}

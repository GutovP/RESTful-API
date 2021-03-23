import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../pokemons.service';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: any;
  page = 1;
  totalPages: number;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getAll(this.pokemons);

  }

  getAll(page: number): void {
    this.pokemonsService.getAllPokemons(25, this.page + 5).subscribe(
      (data) => {
        this.pokemons = data;
        this.totalPages = data.count;

      });
  }


}

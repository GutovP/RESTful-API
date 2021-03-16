import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../pokemons.service';
import { Pokemons, PokemonsDetails, Results } from '../pokemons';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemons;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(): void {
    this.pokemonsService.getAllPokemons().subscribe(
      (data) => this.pokemons = data);


  }
}

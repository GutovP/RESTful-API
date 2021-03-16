import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemons, PokemonsDetails, Results } from '../pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})
export class PokemonsDetailsComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.getDetails();
  }


  getDetails(): void {
    this.pokemonsService.getAllPokemons().subscribe((data) => {
      data.results.map(result => {
        this.pokemonsService.getPokemonDetails(result.name)
          .subscribe(res => {
            this.pokemons.push(res);

            console.log(result.name);
            console.log(res);

          });
      });
    });
  }


}

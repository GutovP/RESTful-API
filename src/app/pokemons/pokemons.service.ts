import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Pokemons, Results } from './pokemons';
import { PokemonsDetails } from './pokemons';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';


  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemons> {
    return this.http.get<Pokemons>(this.pokemonsUrl);
  }

  getPokemonDetails(name: any): Observable<PokemonsDetails> {
    return this.http.get<PokemonsDetails>(`${this.pokemonsUrl}/${name}`);


  }
}

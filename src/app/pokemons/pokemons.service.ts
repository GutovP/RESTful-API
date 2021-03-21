import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemons, Results } from './pokemons';


@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';


  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number, offset: number): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.pokemonsUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<Results[]> {
    const url = `${this.pokemonsUrl}/${name}`;
    return this.http.get<Results[]>(url);

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';



@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonsDetailsComponent,

  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,

  ],
  exports: [
    PokemonsListComponent,
    PokemonsDetailsComponent
  ],
  providers: [

  ]
})
export class PokemonsModule { }

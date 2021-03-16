import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';



const routes: Routes = [

  {
    path: ':name', component: PokemonsDetailsComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonsRoutingModule { }

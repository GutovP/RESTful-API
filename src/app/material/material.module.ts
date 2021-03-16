import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { PokemonsModule } from '../pokemons/pokemons.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [

    PokemonsModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }

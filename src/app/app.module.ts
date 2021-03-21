import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { MaterialModule } from './material/material.module';





@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PokemonsModule,
    MaterialModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsService } from '../pokemons.service';
import { PokemonsListComponent } from './pokemons-list.component';


let component: PokemonsListComponent;
let fixture: ComponentFixture<PokemonsListComponent>;


describe('PokemonsListComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PokemonsListComponent],
      providers: [PokemonsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getAllPokemons function', () => {
    const service: PokemonsService = TestBed.inject(PokemonsService);
    expect(service.getAllPokemons).toBeTruthy();
  });
});

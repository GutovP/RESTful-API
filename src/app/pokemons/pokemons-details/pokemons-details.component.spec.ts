import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

import { PokemonsDetailsComponent } from './pokemons-details.component';

describe('PokemonsDetailsComponent', () => {
  let component: PokemonsDetailsComponent;
  let fixture: ComponentFixture<PokemonsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [PokemonsDetailsComponent],
      providers: [PokemonsService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getPokemonDetails function', () => {
    const service: PokemonsService = TestBed.inject(PokemonsService);
    expect(service.getPokemonDetails).toBeTruthy();
  });
});

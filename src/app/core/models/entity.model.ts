import { Film } from './film.model';
import { Person } from './person.model';
import { PersonState } from '../reducers/person.reducer';
import { FilmState } from '../reducers/film.reducer';
import { Planet } from './planet.model';
import { Specie } from './specie.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';
import { PlanetState } from '../reducers/planet.reducer';
import { SpecieState } from '../reducers/specie.reducer';
import { StarshipState } from '../reducers/starship.reducer';
import { VehicleState } from '../reducers/vehicle.reducer';

export interface Initiation {
  term: string;
  loadMore: boolean;
}

// For types, a plural form is used (like in the api)
export type EntityType = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

// Entities use singular
export type Entity = Film | Person | Planet | Specie | Starship | Vehicle;

export type ResourceState =
  | FilmState
  | PersonState
  | PlanetState
  | SpecieState
  | StarshipState
  | VehicleState;


import { Film } from './film.model';
import { Person } from './person.model';
import { PersonState } from '../reducers/person.reducer';
import { FilmState } from '../reducers/film.reducer';

export type EntityType = 'films' | 'people';

export type Entity = Film | Person;

export type ResourceState = FilmState | PersonState;


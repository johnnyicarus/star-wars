import { FilmState } from '../reducers/film.reducer';
import { PersonState } from '../reducers/person.reducer';
import { config } from '../../app.config';

export const getCount = (state: FilmState | PersonState): number => state.count;

export const calculatePage = (length: number): number => Math.ceil((length / config.entitiesPerPage) + 1);

export const notAllEntitiesLoaded = (total: number, count: number): boolean => count === 0 || total < count;

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailState } from '../reducers/detail.reducer';
import { Detail } from '../models/detail.model';
import { Film } from '../../core/models/film.model';
import { Entity } from '../../core/models/entity.model';
import { Person } from '../../core/models/person.model';
import { selectFilmEntities } from '../../core/selectors/film.selectors';
import { selectPersonEntities } from '../../core/selectors/person.selectors';
import { config } from '../../app.config';
import get from 'lodash.get';

const selectDetailState = createFeatureSelector<DetailState>('detail');

const getCurrentDetail = (state: DetailState): Detail => state.currentDetail;

const selectCurrentDetail = createSelector(
  selectDetailState,
  getCurrentDetail,
);

const getAllEntities = (film: Dictionary<Film>, people: Dictionary<Person>): Dictionary<Dictionary<Entity>> => ({
  films: film,
  people: people,
});

export const selectAllEntities = createSelector(
  selectFilmEntities,
  selectPersonEntities,
  getAllEntities,
);

const getCurrentEntity = (dictionary: Dictionary<Dictionary<Entity>>, detail: Detail): Entity =>
  get(dictionary, [detail.type, detail.id], {});

export const selectCurrentEntity = createSelector(
  selectAllEntities,
  selectCurrentDetail,
  getCurrentEntity,
);

const getFilmTitle = (current: Person, films: Dictionary<Film>): string[] =>
  current.films.map((url: string): string => get(films, [ url.match(config.idRegExp)[1], 'title' ], ''));

export const selectDetailFilms = createSelector(
  selectCurrentEntity,
  selectFilmEntities,
  getFilmTitle,
);

const getCharacterName = (current: Film, people: Dictionary<Person>): string[] =>
  current.characters.map((url: string): string => get(people, [ url.match(config.idRegExp)[1], 'name' ], ''));

export const selectDetailCharacters = createSelector(
  selectCurrentEntity,
  selectPersonEntities,
  getCharacterName,
);

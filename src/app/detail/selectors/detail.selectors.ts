import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailState } from '../reducers/detail.reducer';
import { Detail } from '../models/detail.model';
import { Film } from '../../core/models/film.model';
import { Entity } from '../../core/models/entity.model';
import { Person } from '../../core/models/person.model';
import { selectFilmEntities } from '../../core/selectors/film.selectors';
import { selectPersonEntities } from '../../core/selectors/person.selectors';
import { selectPlanetEntities } from '../../core/selectors/planet.selectors';
import { selectSpecieEntities } from '../../core/selectors/specie.selectors';
import { selectStarshipEntities } from '../../core/selectors/starship.selectors';
import { selectVehicleEntities } from '../../core/selectors/vehicle.selectors';
import { config } from '../../app.config';
import get from 'lodash.get';
import { Planet } from '../../core/models/planet.model';
import { Specie } from '../../core/models/specie.model';
import { Starship } from '../../core/models/starship.model';
import { Vehicle } from '../../core/models/vehicle.model';

const selectDetailState = createFeatureSelector<DetailState>('detail');

const getCurrentDetail = (state: DetailState): Detail => state.currentDetail;

const selectCurrentDetail = createSelector(
  selectDetailState,
  getCurrentDetail,
);

const getAllEntities = (
  films: Dictionary<Film>,
  people: Dictionary<Person>,
  planets: Dictionary<Planet>,
  species: Dictionary<Specie>,
  starships: Dictionary<Starship>,
  vehicles: Dictionary<Vehicle>,
): Dictionary<Dictionary<Entity>> => ({
  films: films,
  people: people,
  planets: planets,
  species: species,
  starships: starships,
  vehicles: vehicles,
});

export const selectAllEntities = createSelector(
  selectFilmEntities,
  selectPersonEntities,
  selectPlanetEntities,
  selectSpecieEntities,
  selectStarshipEntities,
  selectVehicleEntities,
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

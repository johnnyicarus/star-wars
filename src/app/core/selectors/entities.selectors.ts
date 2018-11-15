import { Filter } from '../../search/models/filter.model';
import { Entity, ResourceState } from '../models/entity.model';
import { createSelector } from '@ngrx/store';
import { shuffleArray, sortArray } from '../utils/sort.utils';
import { selectSearchFilter, selectSearchTerm } from '../../search/selectors/search.selectors';
import { selectFilmState, showFilmLoadMore } from './film.selectors';
import { selectPersonState, showPersonLoadMore } from './person.selectors';
import intersectionWith from 'lodash.intersectionwith';
import { FilmState } from '../reducers/film.reducer';
import { PersonState } from '../reducers/person.reducer';

const compareWithResults = (state: ResourceState, term: string): Entity[] => {
  let entities: Entity[] = Object.values(state.entities);

  if (state.searches.hasOwnProperty(term)) {
    const filmResults = state.searches[term].results;
    entities = intersectionWith(entities, filmResults, (entity: Entity, result: string) => entity.id === result);
  }

  return entities;
};

const getEntities = (filmState: FilmState, personState: PersonState, filter: Filter, term: string): Entity[] => {
  const films = compareWithResults(filmState, term);
  const peoples = compareWithResults(personState, term);
  const entities = [].concat(
    filter.films ? films : [],
    filter.people ? peoples : [],
  );
  /*
   * Shuffle entities for some additional fun
   */
  const values = Object.values(filter);

  return values.indexOf(true) !== -1 && (values.indexOf(true) !== values.lastIndexOf(true))
    ? shuffleArray(entities)
    : sortArray(entities);
};


export const selectEntitiesForDisplay = createSelector(
  selectFilmState,
  selectPersonState,
  selectSearchFilter,
  selectSearchTerm,
  selectSearchFilter,
  getEntities,
);

/**
 * 1) Uses the rest operator to "concat" all booleans from individual entity load more selectors.
 * 2) Checks if the respective entities are set in the filter
 * 3) Returns true unless all entities of the filtered types are loaded
 *
 * Note: This function assumes that the order of entity selectors is identical to the order in the filter object
 */
const hasLoadMore = (filter, ...args) => !args.filter((value, key) => Object.values(filter)[key]).every(value => !value);

export const selectShowLoadMore = createSelector(
  selectSearchFilter,
  showFilmLoadMore,
  showPersonLoadMore,
  hasLoadMore,
);

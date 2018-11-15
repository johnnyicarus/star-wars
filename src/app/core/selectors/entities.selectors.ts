import { Filter } from '../../search/models/filter.model';
import { Entity } from '../models/entity.model';
import { Person } from '../models/person.model';
import { Film } from '../models/film.model';
import { createSelector } from '@ngrx/store';
import { shuffleArray, sortArray } from '../utils/sort.utils';
import { selectSearchFilter } from '../../search/selectors/search.selectors';
import { SelectAllFilms } from './film.selectors';
import { selectAllPeople } from './person.selectors';

const getEntities = (films: Film[], people: Person[], filter: Filter): Entity[] => {
  const entities = [].concat(
    filter.films ? films : [],
    filter.people ? people : [],
  );
  /*
   * Unless there is only one entity type displayed:
   * Shuffle entities for additional fun
   */
  console.log(entities);

  const values = Object.values(filter);

  return values.indexOf(true) !== -1 && (values.indexOf(true) !== values.lastIndexOf(true))
    ? shuffleArray(entities)
    : sortArray(entities);
};

export const selectEntitiesForDisplay = createSelector(
  SelectAllFilms,
  selectAllPeople,
  selectSearchFilter,
  getEntities,
);

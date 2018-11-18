import { addSearchIfNew, setAddManyState } from '../utils/state.utils';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResults } from '../../search/models/search.model';
import { Planet } from '../models/planet.model';
import { PlanetActions, PlanetActionTypes } from '../actions/planet.actions';

export interface PlanetState extends EntityState<Planet> {
  count: number;
  searches: {
    [term: string]: SearchResults;
  };
}

export const planetAdapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();

export const planetInitialState: PlanetState = planetAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function planetReducer(
  state = planetInitialState,
  action: PlanetActions
): PlanetState {
  switch (action.type) {
    case PlanetActionTypes.AddPlanet:
      return planetAdapter.addOne(action.payload.entity, state);
    case PlanetActionTypes.AddPlanets:
      return planetAdapter.addMany(<Planet[]>action.payload.results, <PlanetState>setAddManyState(state, action.payload));
    case PlanetActionTypes.InitializePlanets:
      return <PlanetState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}

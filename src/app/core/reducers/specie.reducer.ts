import { addSearchIfNew, setAddManyState } from '../utils/state.utils';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResults } from '../../search/models/search.model';
import { Specie } from '../models/specie.model';
import { SpecieActions, SpecieActionTypes } from '../actions/specie.actions';

export interface SpecieState extends EntityState<Specie> {
  count: number;
  searches: {
    [term: string]: SearchResults;
  };
}

export const specieAdapter: EntityAdapter<Specie> = createEntityAdapter<Specie>();

export const specieInitialState: SpecieState = specieAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function specieReducer(
  state = specieInitialState,
  action: SpecieActions
): SpecieState {
  switch (action.type) {
    case SpecieActionTypes.AddSpecie:
      return specieAdapter.addOne(action.payload.entity, state);
    case SpecieActionTypes.AddSpecies:
      return specieAdapter.addMany(<Specie[]>action.payload.results, <SpecieState>setAddManyState(state, action.payload));
    case SpecieActionTypes.InitializeSpecies:
      return <SpecieState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}

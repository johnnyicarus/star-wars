import { StarshipActions, StarshipActionTypes } from '../actions/starship.actions';
import { addSearchIfNew, setAddManyState } from '../utils/state.utils';
import { Starship } from '../models/starship.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResults } from '../../search/models/search.model';

export interface StarshipState extends EntityState<Starship> {
  count: number;
  searches: {
    [term: string]: SearchResults;
  };
}

export const starshipAdapter: EntityAdapter<Starship> = createEntityAdapter<Starship>();

export const starshipInitialState: StarshipState = starshipAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function starshipReducer(
  state = starshipInitialState,
  action: StarshipActions
): StarshipState {
  switch (action.type) {
    case StarshipActionTypes.AddStarship:
      return starshipAdapter.addOne(action.payload.entity, state);
    case StarshipActionTypes.AddStarships:
      return starshipAdapter.addMany(<Starship[]>action.payload.results, <StarshipState>setAddManyState(state, action.payload));
    case StarshipActionTypes.InitializeStarships:
      return <StarshipState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}

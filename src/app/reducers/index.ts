import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { filmReducer, FilmState } from '../core/reducers/film.reducer';
import { personReducer, PersonState } from '../core/reducers/person.reducer';
import { planetReducer, PlanetState } from '../core/reducers/planet.reducer';
import { specieReducer, SpecieState } from '../core/reducers/specie.reducer';
import { starshipReducer, StarshipState } from '../core/reducers/starship.reducer';
import { vehicleReducer, VehicleState } from '../core/reducers/vehicle.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../utils/serializer.utils';

export interface State {
  film: FilmState;
  router: RouterReducerState<RouterStateUrl>;
  person: PersonState;
  planet: PlanetState;
  specie: SpecieState;
  starship: StarshipState;
  vehicle: VehicleState;
}

export const reducers: ActionReducerMap<State> = {
  film: filmReducer,
  router: routerReducer,
  person: personReducer,
  planet: planetReducer,
  specie: specieReducer,
  starship: starshipReducer,
  vehicle: vehicleReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

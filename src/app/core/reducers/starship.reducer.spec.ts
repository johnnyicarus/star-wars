import { starshipInitialState, starshipReducer } from './starship.reducer';

describe('Spaceship Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = starshipReducer(starshipInitialState, action);

      expect(result).toBe(starshipInitialState);
    });
  });
});

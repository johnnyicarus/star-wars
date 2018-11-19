import { planetInitialState, planetReducer } from './planet.reducer';

describe('Planet Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = planetReducer(planetInitialState, action);

      expect(result).toBe(planetInitialState);
    });
  });
});

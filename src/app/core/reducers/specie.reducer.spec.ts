import { specieInitialState, specieReducer } from './specie.reducer';

describe('Specie Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = specieReducer(specieInitialState, action);

      expect(result).toBe(specieInitialState);
    });
  });
});

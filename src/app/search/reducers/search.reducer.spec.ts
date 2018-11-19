import { searchInitialState, searchReducer } from './search.reducer';

describe('Search Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = searchReducer(searchInitialState, action);

      expect(result).toBe(searchInitialState);
    });
  });
});

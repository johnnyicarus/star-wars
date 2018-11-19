import { filmInitialState, filmReducer } from './film.reducer';


describe('Film Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = filmReducer(filmInitialState, action);

      expect(result).toBe(filmInitialState);
    });
  });
});

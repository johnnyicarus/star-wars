import { personInitialState, personReducer } from './person.reducer';


describe('Person Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = personReducer(personInitialState, action);

      expect(result).toBe(personInitialState);
    });
  });
});

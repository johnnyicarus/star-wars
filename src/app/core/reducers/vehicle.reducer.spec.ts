import { vehicleInitialState, vehicleReducer } from './vehicle.reducer';

describe('Vehicle Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = vehicleReducer(vehicleInitialState, action);

      expect(result).toBe(vehicleInitialState);
    });
  });
});

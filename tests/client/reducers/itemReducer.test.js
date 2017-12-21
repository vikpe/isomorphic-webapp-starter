import * as actionsTypes from 'client/actionsTypes';
import itemReducer from 'client/reducers/itemReducer';

describe('itemReducer', () => {
  test('should handle defaulte case (initial state)', () => {
    const initialState = undefined;
    const action = { type: 'DEFAULT_CASE' };
    const resultState = itemReducer(initialState, action);
    const expectedState = [];
    expect(resultState).toEqual(expectedState);
  });

  test('should handle RECEIVE_ITEMS', () => {
    const initialState = undefined;
    const action = {
      type: actionsTypes.RECEIVE_ITEMS,
      payload: { items: ['Alpha', 'Beta'] },
    };
    const resultState = itemReducer(initialState, action);
    const expectedState = ['Alpha', 'Beta'];
    expect(resultState).toEqual(expectedState);
  });
});

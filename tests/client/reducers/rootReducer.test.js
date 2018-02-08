import rootReducer from 'client/reducers/rootReducer';
import { initialState as itemsInitialState } from 'client/reducers/itemReducer';

describe('rootReducer', () => {
  test('initial state', () => {
    const initialState = undefined;
    const action = { type: 'DEFAULT_CASE' };
    const resultState = rootReducer(initialState, action);
    const expectedState = {
      items: itemsInitialState,
    };

    expect(resultState).toEqual(expectedState);
  });
});

import { combineReducers } from 'redux';
import items from 'client/reducers/items';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;

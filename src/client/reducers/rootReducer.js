import { combineReducers } from 'redux';
import items from 'client/reducers/itemReducer';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;

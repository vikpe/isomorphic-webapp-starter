import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'client/reducers/rootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

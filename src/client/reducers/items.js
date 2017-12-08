import * as actionTypes from 'client/actionsTypes';

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_ITEMS: {
      return action.items;
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;

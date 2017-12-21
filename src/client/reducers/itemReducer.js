import * as actionTypes from 'client/actionsTypes';

export const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_ITEMS: {
      return action.payload.items;
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;

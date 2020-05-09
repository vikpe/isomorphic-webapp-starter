import ApiClient from 'client/ApiClient';
import * as actionTypes from 'client/actionsTypes';

export const receiveItems = (items) => ({
  type: actionTypes.RECEIVE_ITEMS,
  payload: { items },
});

export function createItem(item) {
  return (dispatch) =>
    ApiClient.post('items', item).then(() => {
      dispatch(getItems());
    });
}

export function deleteItem(id) {
  return (dispatch) =>
    ApiClient.delete(`items/${id}`).then(() => {
      dispatch(getItems());
    });
}

export function getItems() {
  return (dispatch) =>
    ApiClient.get('items').then((response) => {
      dispatch(receiveItems(response.data));
    });
}

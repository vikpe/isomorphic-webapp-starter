import React from 'react';
import * as itemActions from 'client/actions/itemActions';
import * as actionTypes from 'client/actionsTypes';

describe('itemActions', () => {
  describe('sync actions', () => {
    test('receiveItems', () => {
      const items = ['Alpha', 'Beta'];
      const result = itemActions.receiveItems(items);
      const expectedResult = {
        type: actionTypes.RECEIVE_ITEMS,
        payload: { items: ['Alpha', 'Beta'] },
      };
      expect(result).toEqual(expectedResult);
    });
  });

  describe('async actions', function () {
    test.skip('createItem', () => {});

    test.skip('deleteItem', () => {});

    test.skip('getItems', () => {});
  });
});

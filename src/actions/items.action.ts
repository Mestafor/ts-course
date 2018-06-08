import {Action} from 'redux';

export const GET_ITEMS_PENDING: string = 'GET_ITEMS_PENDING';
export const GET_ITEMS_SUCCESS: string = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERRRO: string = 'GET_ITEMS_ERROR';

export const itemsActions = {
  getItems(): Action {
    return {
      type: GET_ITEMS_PENDING
    }
  }
}
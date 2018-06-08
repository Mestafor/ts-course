import { AnyAction } from 'redux';

export const UPDATE_SEARCH_TERM: string = 'UPDATE_SEARCH_TERM';

export const searchActions = {
  onUpdateSearch(payload: string): AnyAction {
    return {
      type: UPDATE_SEARCH_TERM,
      payload
    }
  }
}
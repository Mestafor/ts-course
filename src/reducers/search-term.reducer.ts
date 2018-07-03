import { UPDATE_SEARCH_TERM } from "../actions/search-term.action";

export type SearchTerm = string;

export const initData: SearchTerm = '';

export const searchTermsReducer =
  (state: SearchTerm = initData, action: CustomAction<SearchTerm> ): SearchTerm => {
    switch (action.type) {
      case UPDATE_SEARCH_TERM: {
        console.log(action);
        return action.payload;
      }
    }

    return state;
  }

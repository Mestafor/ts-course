import { Reducer, combineReducers } from "redux";
import { CourseStore } from "../store/root.store";
import { itemsReducer } from "./items.reducer";
import { searchTermsReducer } from "./search-term.reducer";


export const rootReducer: Reducer<CourseStore> = combineReducers({
  items: itemsReducer,
  searchTerm: searchTermsReducer
});

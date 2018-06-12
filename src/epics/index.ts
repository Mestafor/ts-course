import { Epic, combineEpics } from "redux-observable";
import { itemsEpic } from "./items.epic";


export const epicMiddleware = combineEpics(
  itemsEpic
);

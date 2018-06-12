import { AnyAction } from "redux";
import { GET_ITEMS_SUCCESS } from "../actions/items.action";

export type Item = {
  profileName: string;
  firstName: string;
  surname: string;
  photo: string;
  country: string;
}

export const initData: Item[] = [];

export const itemsReducer =
  (state: Item[] = initData, action: CustomAction<Item[]>): Item[] => {
    switch (action.type) {
      case GET_ITEMS_SUCCESS:
        return action.payload
    }

    return state;
  } 

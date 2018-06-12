import { Action } from "redux";
import { GET_ITEMS_PENDING, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from "../actions/items.action";
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import { api } from "../services/api-call.service";
import { AxiosResponse } from "axios";
import { Item } from "../reducers/items.reducer";

export const itemsEpic: (action$: ActionsObservable<Action>) => any =
  (action$: any) => {
    return action$
      .ofType(GET_ITEMS_PENDING)
      .switchMap(() => (Observable as any)
        .fromPromise(api.getItems('1y2zyut'))
        .map((items: AxiosResponse<Item[]>) => {
          return {
            type: GET_ITEMS_SUCCESS,
            payload: items.data
          }
        })
        // .catch((err: { message: string }) => {
        //   return [
        //     {
        //       type: GET_ITEMS_ERROR,
        //       payload: { err: err.message }
        //     }
        //   ]
        // })
      )
  }

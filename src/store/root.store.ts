import { compose, createStore, Store, applyMiddleware } from "redux";
import { Item } from "../reducers/items.reducer";
import { rootReducer } from "../reducers";
import { createEpicMiddleware } from "redux-observable";
import { epicMiddleware } from "../epics";
declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export type CourseStore = {
  items: Item[];
  searchTerm: string;
};

const rootEpicsMiddleware = createEpicMiddleware(epicMiddleware);

const initStore: () => Store<CourseStore> = () => {
  const composeEnchancer: typeof compose =
    typeof window === 'object' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Typescript course module'
      }) :
      compose;

  return createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(rootEpicsMiddleware))
  );
};

export const store: Store<CourseStore> = initStore();

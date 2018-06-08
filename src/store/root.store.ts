import { compose, createStore, Store } from "redux";
declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

export type CourseStore = {
  items: Item[];
  searchTerm: string;
};

const initStore: () => Store<CourseStore> = () => {
  const composeEnchancer: typeof compose =
    typeof window === 'object' && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Typescript course module'
      }) :
      compose;

  return createStore<CourseStore>(rootReducer);
};

export const store: Store<CourseStore> = initStore();

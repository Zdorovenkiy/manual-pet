import {
  combineReducers,
  configureStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import type { StateSchema } from './StoreProvider';
import { baseApi } from '@/shared/api';



export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    // user: userReducer,
  };

  const apiReducers = {
    [baseApi.reducerPath]: baseApi.reducer,
  };

  const combinedReducers = combineReducers({
    ...rootReducers,
    ...apiReducers,
  });

  const store = configureStore({
    reducer: combinedReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        baseApi.middleware,
    ),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export type RootState = ReturnType<
  ReturnType<typeof createReduxStore>['getState']
>;
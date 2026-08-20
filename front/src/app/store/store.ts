import {
  combineReducers,
  configureStore,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import {  userReducer } from '@/entities/user';
import { authReducer } from '@/features/auth';
import { themeReducer } from '@/features/theme';

export interface StateSchema {
  user: ReturnType<typeof userReducer>;
  auth: ReturnType<typeof authReducer>;
  theme: ReturnType<typeof themeReducer>;
}

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    auth: authReducer,
    theme: themeReducer
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
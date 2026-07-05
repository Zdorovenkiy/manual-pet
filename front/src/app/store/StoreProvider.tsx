import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './store';

export interface StateSchema {
  // user: Partial<IUser>;
  // product: Partial<IProduct[]>;
  // order: Partial<IOrder>;
}

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
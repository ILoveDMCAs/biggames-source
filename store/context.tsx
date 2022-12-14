import { createContext, useContext } from 'react';
import Store, { configStore } from './store';

export const store = {
    state: Store(configStore),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext<typeof store>(StoreContext);
}

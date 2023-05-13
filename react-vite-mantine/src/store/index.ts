import { Reducer, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import rootReducer from './ducks/rootReducer';

const __prod__ = process.env.NODE_ENV === 'production';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2 as (inboundState: CombinedState) => CombinedState
};

type CombinedState = typeof rootReducer extends Reducer<infer U, any> ? U : never;

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: !__prod__,
  middleware: []
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

export default store;

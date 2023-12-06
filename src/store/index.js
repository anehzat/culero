import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { statusReducer } from './status';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
const rootReducer = combineReducers({
  'status': persistReducer(
    {
      key: 'status',
      storage,
      version: 1,
    },
    statusReducer,
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


const makeStore = () => store

export const persistor = persistStore(store)
export const wrapper = createWrapper(makeStore)

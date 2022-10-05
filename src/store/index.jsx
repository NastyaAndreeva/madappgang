import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { dragonsReducer } from './dragons';
import middleware from './middleware';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dragons: persistReducer(authPersistConfig, dragonsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import contactsReducer from 'store/contacts';
import middleware from './middleware';

export const store = configureStore({
  middleware,
  reducer: { contactsReducer },
});

export const persistedStore = persistStore(store);

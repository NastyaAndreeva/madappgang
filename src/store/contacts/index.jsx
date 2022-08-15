import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const items = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, { ...action.payload, id: nanoid() }];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact, changeFilter } = contacts.actions;

export const contactsReducer = persistReducer(persistConfig, contacts.reducer);

export const getContacts = state => state.contactsReducer.items;
export const getFilter = state => state.contactsReducer.filter;

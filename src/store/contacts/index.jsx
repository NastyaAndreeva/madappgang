import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  getAllContacts,
  deleteContactById,
  addNewContact,
} from 'api/fetchContacts';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['filter'],
};

// Actions
export const { setContacts, changeFilter } = contacts.actions;

// Reducer

export default persistReducer(persistConfig, contacts.reducer);

// Selectors
export const getContacts = state => state.contactsReducer.items;
export const getFilter = state => state.contactsReducer.filter;

// Async Actions
export const getContactsAsync = () => async dispatch => {
  try {
    const res = await getAllContacts();
    dispatch(setContacts(res));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addContactAsync = contact => async dispatch => {
  try {
    const res = await addNewContact(contact);
    dispatch(setContacts(res));
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteContactAsync = id => async dispatch => {
  try {
    const res = await deleteContactById(id);
    dispatch(setContacts(res));
  } catch (error) {
    toast.error(error.message);
  }
};

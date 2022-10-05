import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import dragonOperations from './dragons-operations';

const initialState = {
  dragons: [],
  favoriteDragons: [],
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    addDragon(state, action) {
      const dataValidation = () =>
        state.favoriteDragons.find(dragon => dragon.id === action.payload.id);
      if (dataValidation()) {
        toast.error(`${action.payload.name} is already in your list`);
        return;
      }
      state.favoriteDragons.push(action.payload);
      toast.success(`${action.payload.name} was added in your list`);
    },
    deleteDragon(state, action) {
      state.favoriteDragons = state.favoriteDragons.filter(
        item => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [dragonOperations.getAllDragons.fulfilled](state, action) {
      state.dragons = action.payload;
    },
  },
});

export default dragonsSlice.reducer;

export const { addDragon, deleteDragon } = dragonsSlice.actions;

export const getFavouriteDragons = state => state.dragons.favoriteDragons;

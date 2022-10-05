import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchDragonsData } from 'api/fetchDragons';
import { toast } from 'react-toastify';

const getAllDragons = createAsyncThunk('dragons/getAll', async () => {
  try {
    const { data } = await fetchDragonsData();
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const operations = {
  getAllDragons,
};
export default operations;

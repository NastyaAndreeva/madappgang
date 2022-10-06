import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api';
import {
  fetchRegister,
  fetchCurrent,
  fetchLogin,
  fetchLogout,
} from 'api/fetchUser';
import { toast } from 'react-toastify';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await fetchRegister(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await fetchLogin(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await fetchLogout();
    token.unset();
  } catch (error) {
    toast.error(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await fetchCurrent();
      return data;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;

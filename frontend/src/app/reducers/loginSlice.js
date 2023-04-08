import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: '',
  isLogged: false,
  isAdmin: false,
};

export const loginUser = createAsyncThunk('loginUser', async (body) => {
  const res = await fetch('http://localhost:8080/api/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    Authorization: localStorage.getItem('token'),
    body: JSON.stringify(body),
  });
  return await res.json();
});

const loginSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem('token');
      // state.isLogged = true;
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem('user');
      // state.isLogged = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.isLogged = false;
    },
    [loginUser.fulfilled]: (state, { payload: { token, user } }) => {
      state.loading = false;
      state.token = token;
      state.user = user;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      state.isLogged = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.isLogged = false;
    },
  },
});

export const { addToken, addUser } = loginSlice.actions;
export default loginSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: '',
};

export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
  const result = await fetch('http://localhost:8080/api/auth/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    Authorization: localStorage.getItem('token'),
    body: JSON.stringify(body),
  });
  return await result.json();
});

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { msg, error } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default signUpSlice.reducer;

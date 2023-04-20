import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  adminUser: localStorage.getItem('adminUser')
    ? localStorage.getItem('adminUser')
    : null,
  reallyAdmin: localStorage.getItem('reallyAdmin')
    ? localStorage.getItem('reallyAdmin')
    : false,
};

export const adminLogin = createAsyncThunk(
  'admin/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        let errorMessage = 'An error occurred while logging in.';
        if (response.status === 401) {
          errorMessage = 'Invalid email or password.';
        } else if (response.status === 400) {
          errorMessage = 'Invalid email or password.';
        } else if (response.status === 404) {
          errorMessage = 'The requested resource was not found.';
        }
        return (
          rejectWithValue({ message: errorMessage }) || console.log(response.ok)
        );
      }

      const data = await response.json();
      console.log('from AdminSlice', data);
      localStorage.setItem('reallyAdmin', data.isAdmin);
      localStorage.setItem('adminUser', JSON.stringify(data));
      return data;
    } catch (error) {
      throw error.response?.data || { message: error.message };
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('reallyAdmin');
});

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.reallyAdmin = false;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.reallyAdmin = action.payload.IsReallyAdmin;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.user = null;
        state.reallyAdmin = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.reallyAdmin = false;
      });
  },
});
export default adminSlice.reducer;

export const IsReallyUser = (state) => state.admin.adminUser;
export const IsReallyAdmin = (state) => state.admin.reallyAdmin;

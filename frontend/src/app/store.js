import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './reducers/signUpSlice';
import loginSlice from './reducers/loginSlice';
import adminSlice from './reducers/adminSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    logIn: loginSlice,
    adminLogin: adminSlice,
  },
});

export default store;

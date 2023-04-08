import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './reducers/signUpSlice';
import loginSlice from './reducers/loginSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice,
    logIn: loginSlice,
  },
});

export default store;

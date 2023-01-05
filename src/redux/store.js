import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login';
import userReducer from './reducers/users';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer
  },
});

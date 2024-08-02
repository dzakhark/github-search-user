import { configureStore } from '@reduxjs/toolkit';
import userListReducer, { UserListState } from '../features/users/userListSlice';
import userDetailsReducer, { UserDetailsState } from '../features/users/userDetailsSlice';

export interface RootState {
  userList: UserListState;
  userDetails: UserDetailsState;
}

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    userDetails: userDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import octokit from '../../services/octokit';

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface UserListState {
  users: User[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

interface FetchUserPayload {
  username: string,
  page: number,
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async ({ username, page }: FetchUserPayload) => {
    const response = await octokit.search.users({
      q: username,
      per_page: 30,
      page,
    });
    return response.data;
  }
);

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.users = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage: (state) => {
      state.page += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload.items];
      state.hasMore = action.payload.total_count > state.users.length;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  }
});

export const { resetUsers, incrementPage } = userListSlice.actions;
export default userListSlice.reducer;

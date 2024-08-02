import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import octokit from '../../services/octokit';

export interface UserDetails {
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  following: number;
  company: string | null;
  email: string | null;
  blog: string | null;
}

export interface UserDetailsState {
  userDetails: UserDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserDetailsState = {
  userDetails: null,
  loading: false,
  error: null,
};

interface FetchUserDetailsPayload {
  username: string
}

export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails',
  async ({ username }: FetchUserDetailsPayload) => {
    const response = await octokit.users.getByUsername({ username });
    return response.data as UserDetails;
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetails = action.payload;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  }
});

export default userDetailsSlice.reducer;

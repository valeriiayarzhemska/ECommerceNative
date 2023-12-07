import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/user/userApi';

const initialState = {
  user: null,
  userId: null,
  token: null,
  isAuthenticated: false,
};

export const setUser = createAsyncThunk(
  'auth/setUser',
  async payload => payload,
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(setUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
        console.log('login pending', action);
      })
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('login fulfilled', action.payload.token);
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        console.log('login rejected', action);
      })
      .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
        console.log('user fulfilled', action);
        state.user = action.payload;
      })
      .addMatcher(userApi.endpoints.getUser.matchRejected, (state, action) => {
        console.log('user rejected', action);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

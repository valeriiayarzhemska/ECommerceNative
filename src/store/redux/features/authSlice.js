import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../services/user/userApi';

const initialState = {
  user: null,
  token: null,
  lang: 'en',
};

export const setUser = createAsyncThunk(
  'auth/setUser',
  async payload => payload,
);
export const setLang = createAsyncThunk(
  'user/setLang',
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
      .addCase(setLang.fulfilled, (state, action) => {
        state.lang = action.payload;
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

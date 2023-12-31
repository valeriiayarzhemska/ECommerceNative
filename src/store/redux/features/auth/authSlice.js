import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user/userApi';

const initialState = {
  user: null,
  userId: null,
  token: null,
  authError: null,
  lang: 'en',
};

export const setUser = createAsyncThunk(
  'auth/setUser',
  async payload => payload,
);

export const setUserId = createAsyncThunk(
  'auth/setUserId',
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
      .addCase(setUserId.fulfilled, (state, action) => {
        state.userId = action.payload.data;
      })
      .addCase(setLang.fulfilled, (state, action) => {
        state.lang = action.payload;
      })
      .addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
        console.log('login pending', action);
        state.authError = null;
      })
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('login fulfilled', action.payload.token);
        state.token = action.payload.token;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        console.log('login rejected', action);
        state.authError = 'errorWentWrong';
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

import { userApi } from "../services/user/userApi";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
        console.log('login pending', action);
      })
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('login fulfilled', action);
        state.token = action.payload.token;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        console.log('login rejected', action);
      })
      .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
        console.log('user fulfilled', action);
        state.user = action.payload;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        console.log('user rejected', action);
      })
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

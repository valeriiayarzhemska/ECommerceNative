import { combineReducers } from 'redux';
import { api } from './services/api';
import authSlice from './features/authSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
});

export default rootReducer;

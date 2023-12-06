import { combineReducers } from 'redux';
import { api } from './services/api';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

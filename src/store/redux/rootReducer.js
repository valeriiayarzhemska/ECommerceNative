import { combineReducers } from 'redux';
import { api } from './services/api';
import authSlice from './features/auth/authSlice';
import productsSlice from './features/products/productsSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  products: productsSlice,
});

export default rootReducer;

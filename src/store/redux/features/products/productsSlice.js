import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../services/user/userApi';
import { productsApi } from '../../services/products/productsApi';

const initialState = {
  products: [],
  likedList: [],
  isProductListLoading: false,
  productsError: null,
};

export const setProducts = createAsyncThunk(
  'products/setProducts',
  async payload => payload,
);

export const setProduct = createAsyncThunk(
  'products/setProduct',
  async payload => payload,
);

export const setLikedList = createAsyncThunk(
  'products/setLikedList',
  async payload => payload,
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setProducts.pending, (state, action) => {
        state.productsError = null;
        state.isProductListLoading = true;
      })
      .addCase(setProducts.fulfilled, (state, action) => {
        state.isProductListLoading = false;
        state.products = action.payload;
      })
      .addMatcher(productsApi.endpoints.getProducts.matchPending, (state, action) => {
        state.productsError = null;
        state.isProductListLoading = true;
      })
      .addMatcher(productsApi.endpoints.getProducts.matchFulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductListLoading = false;
      })
      .addMatcher(productsApi.endpoints.getProducts.matchRejected, (state, action) => {
        state.productsError = 'errorWentWrong';
      })
  },
});

export default productsSlice.reducer;

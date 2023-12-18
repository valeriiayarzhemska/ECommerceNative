import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../services/products/productsApi';

const initialState = {
  products: [],
  wishList: [],
  cartList: [],
  isProductListLoading: false,
  productsError: null,
  isWishListLoading: false,
  wishListError: null,
  isCartListLoading: false,
  cartError: null,
};

export const setProducts = createAsyncThunk(
  'products/setProducts',
  async payload => payload,
);

export const setProduct = createAsyncThunk(
  'products/setProduct',
  async payload => payload,
);

export const setWishList = createAsyncThunk(
  'products/setWishList',
  async payload => payload,
);

export const setCartList = createAsyncThunk(
  'products/setCartList',
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
      .addCase(setProducts.rejected, (state, action) => {
        state.productsError = 'errorWentWrong';
      })

      .addCase(setWishList.pending, (state, action) => {
        state.wishListError = null;
        state.isWishListLoading = true;
      })
      .addCase(setWishList.fulfilled, (state, action) => {
        state.isWishListLoading = false;
        state.wishList = action.payload;
      })
      .addCase(setWishList.rejected, (state, action) => {
        state.wishListError = 'errorWentWrong';
      })

      .addCase(setCartList.pending, (state, action) => {
        state.cartError = null;
        state.isCartListLoading = true;
      })
      .addCase(setCartList.fulfilled, (state, action) => {
        state.isCartListLoading = false;
        state.cartList = action.payload;
      })
      .addCase(setCartList.rejected, (state, action) => {
        state.cartError = 'errorWentWrong';
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

      .addMatcher(productsApi.endpoints.getUserCart.matchPending, (state, action) => {
        state.cartError = null;
        state.isCartListLoading = true;
      })
      .addMatcher(productsApi.endpoints.getUserCart.matchFulfilled, (state, action) => {
        state.cartList = action.payload;
        state.isCartListLoading = false;
      })
      .addMatcher(productsApi.endpoints.getUserCart.matchRejected, (state, action) => {
        state.cartError = 'errorWentWrong';
      })
  },
});

export default productsSlice.reducer;

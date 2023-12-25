import { setProducts, setCartList, setWishList } from './productsSlice';

export const setProductsData =
  ({ data }) =>
  async dispatch => {
    dispatch(setProducts.pending());

    try {
      dispatch(setProducts.fulfilled(data));
      console.log(data);
    } catch (error) {
      dispatch(setProducts.rejected());
      console.log('productsList error: ', error);
    }
  };

export const setCartData =
  ({ data }) =>
  async dispatch => {
    dispatch(setCartList.pending());

    try {
      dispatch(setCartList.fulfilled(data));
    } catch (error) {
      dispatch(setCartList.rejected());
      console.log('cartList error: ', error);
    }
  };

export const updateCartData =
  (props = {}) =>
  async dispatch => {
    const { cartList } = props;

    try {
      dispatch(setCartList.fulfilled(cartList));
    } catch (error) {
      console.log('cartList error: ', error);
    }
  };

export const updateWishList =
  (props = {}) =>
  async dispatch => {
    const { wishList } = props;

    try {
      dispatch(setWishList.fulfilled(wishList));
    } catch (error) {
      console.log('wishList error: ', error);
    }
  };

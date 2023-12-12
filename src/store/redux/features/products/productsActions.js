import { setProducts } from './productsSlice';

export const setProductsData =
  ({ data }) =>
  async dispatch => {
    dispatch(setProducts.pending());

    try {
      dispatch(setProducts.fulfilled({ products: data }));
    } catch {
      dispatch(setProducts.rejected());
    }
  };

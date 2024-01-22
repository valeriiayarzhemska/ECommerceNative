export const selectProducts = state => state.products.products;
export const selectProductsLoading = state =>
  state.products.isProductListLoading;
export const selectProductsError = state => state.products.productsError;

export const selectCartList = state => state.products.cartList;
export const selectCartListLoading = state => state.products.isCartListLoading;
export const selectCartListError = state => state.products.cartError;

export const selectWishList = state => state.products.wishList;
export const selectWishListLoading = state => state.products.isWishListLoading;
export const selectWishListError = state => state.products.wishListError;

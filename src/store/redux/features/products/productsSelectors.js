export const selectProducts = state => state.products.products;
export const selectProductsLoading = state => state.products.isProductListLoading;
export const selectProductsError = state => state.products.productsError;

export const selectCart = state => state.products.cartList;
export const selectCartLoading = state => state.products.isCartListLoading;
export const selectCartError = state => state.products.cartError;

export const selectWishList = state => state.products.wishList;
export const selectWishListLoading = state => state.products.isWishListLoading;
export const selectWishListError = state => state.products.wishListError;

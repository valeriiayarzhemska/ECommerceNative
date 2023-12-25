import { BackHandler } from 'react-native';
import { useTranslation } from 'react-i18next';
import { sortOptionsValues } from '../constants';

export const refresh = (setRefreshing, useCallback) => {
  return useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
};

export const handleBackClick = (
  goBack,
  navigation,
  useCallback,
  goBackData = {},
) =>
  useCallback(() => {
    const onBackPress = () => {
      navigation.navigate(goBack, goBackData);
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [navigation, goBack, goBackData]);

export const setProductsWishList = (item, list, dispatch, setWishList) => {
  const productIndex = list.findIndex(product => +product.id === +item.id);

  if (productIndex >= 0) {
    dispatch(
      setWishList({ wishList: list.filter(product => product.id !== item.id) }),
    );
  } else {
    dispatch(setWishList({ wishList: [...list, item] }));
  }
};

export const setProductsCartList = async (
  userCart,
  products,
  dispatch,
  setCartData,
) => {
  if (!userCart || !userCart.products || !products) {
    return [];
  }

  const productsInCart = userCart.products.map(cartItem => {
    const product = products.find(product => product.id === cartItem.productId);

    if (product) {
      return {
        ...product,
        quantity: cartItem.quantity,
      };
    }

    return null;
  });

  const newProductsInCart = productsInCart.filter(Boolean);

  await dispatch(setCartData(newProductsInCart));

  return newProductsInCart;
};

export const updateProductsCartList = (item, list, dispatch, setCartList) => {
  const productIndex = list.findIndex(product => +product.id === +item.id);

  if (productIndex >= 0) {
    dispatch(
      setCartList({ cartList: list.filter(product => product.id !== item.id) }),
    );
  } else {
    dispatch(setCartList({ cartList: [...list, item] }));
  }
};

export const handleUserIconClick = () => {};

export const sliceProductTitle = title => {
  const productTitleSplited = title.split(' ');
  const productTitleSliced = productTitleSplited.slice(0, 3).join(' ');
  const productTitle =
    productTitleSplited.length > 4
      ? productTitleSliced + ' ...'
      : productTitleSliced;

  return productTitle;
};

export const filterProductsCategories = products => {
  const categoriesSet = new Set();
  const categories = [];

  products.forEach(({ category }) => {
    if (!categoriesSet.has(category)) {
      const title = category.slice(0, 1).toUpperCase();
      const categoriesTitle = title.concat(category.slice(1));

      categories.push({ title: categoriesTitle, category: category });
      categoriesSet.add(category);
    }
  });

  return categories;
};

const categoriesSet = new Set([]);

export const filterProducts = (
  products,
  setFilteredProducts,
  filteredCategory,
) => {
  const updatedFilteredProducts = [];
  const hasCategory = categoriesSet.has(filteredCategory);

  if (!hasCategory) {
    categoriesSet.add(filteredCategory);
  } else {
    categoriesSet.delete(filteredCategory);
  }

  if (categoriesSet.size > 0) {
    products.forEach(product => {
      if (categoriesSet.has(product.category)) {
        updatedFilteredProducts.push(product);
      }
    });
  } else {
    updatedFilteredProducts.push(...products);
  }

  setFilteredProducts(updatedFilteredProducts);
};

export const sortProducts = (filteredProducts, sortOption) => {
  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case sortOptionsValues.sortLowHighEn || sortOptionsValues.sortLowHighUa: {
      sortedProducts.sort(
        (productA, productB) => productA.price - productB.price,
      );
      break;
    }

    case sortOptionsValues.sortHighLowEn || sortOptionsValues.sortHighLowUa: {
      sortedProducts.sort(
        (productA, productB) => productB.price - productA.price,
      );
      break;
    }

    case sortOptionsValues.sortPopularityEn ||
      sortOptionsValues.sortPopularityUa:
    default: {
      sortedProducts.sort(
        (productA, productB) => productA.rating.rate - productB.rating.rate,
      );
      break;
    }
  }

  return sortedProducts;
};

export const filterSearchedProducts = async (products, values) => {
  const searchedProducts = await products
    .filter(({ title }) => title.toLowerCase().includes(values.toLowerCase()))
    .map(({ id, title, image, price, rating }) => {
      return {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      };
    });

  return searchedProducts;
};

export const shouldItemUpdate = (prev, next) => {
  const prevItem = prev.item;
  const nextItem = next.item;

  const hasChanged = Object.keys(prevItem).some(key => {
    return prevItem[key] !== nextItem[key];
  });

  return hasChanged;
};

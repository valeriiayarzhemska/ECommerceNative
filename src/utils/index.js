import { BackHandler } from 'react-native';
import { sliderImages } from '../components/SliderItem';

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

export const filterProducts = (
  products,
  filteredProducts,
  setFilteredProducts,
  filteredCategory,
  productsCategories,
) => {
  const categoriesSet = new Set();
  /* console.log(categoriesSet);

  if (!filteredCategory) {
    setFilteredProducts(products);
  } else {
    const updatedFilteredProducts = filteredProducts.filter(({ category }) => {
      if (!categoriesSet.has(category) && category === filteredCategory) {
        categoriesSet.add(category);
        return true;
      }

      if (categoriesSet.has(category) && category !== filteredCategory) {
        categoriesSet.delete(category);
        return false;
      }

      return true; // Include products not affected by the filter
    });

    setFilteredProducts(updatedFilteredProducts);
  } */

  const updatedFilteredProducts = filteredProducts.filter(({ category }) => {
    console.log(category, filteredCategory);
    if (!categoriesSet.has(category) && category === filteredCategory) {
      categoriesSet.add(category);
      console.log('11')
      return true;
    }

    if (categoriesSet.has(category) && category !== filteredCategory) {
      categoriesSet.delete(category);
      return false;
    }

    return true;
  });

  setFilteredProducts(updatedFilteredProducts);
};

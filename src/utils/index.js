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
    products.forEach((product) =>{
      if (categoriesSet.has(product.category)) {
        updatedFilteredProducts.push(product);
      }
    })
  } else {
    updatedFilteredProducts.push(...products);
  }

  setFilteredProducts(updatedFilteredProducts);
};

export const shouldItemUpdate = (prev, next) => {
  const prevItem = prev.item;
  const nextItem = next.item;

  const hasChanged = Object.keys(prevItem).some(key => {
    return prevItem[key] !== nextItem[key];
  });

  return hasChanged;
};

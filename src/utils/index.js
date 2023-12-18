import { BackHandler } from 'react-native';

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
  const categories = [];
  let categoriesTitle = '';
  let categoriesImages = '';
  let prevCategory = '';

  products.map(({ category }) => {
    if (prevCategory !== category) {
      const title = category.slice(0, 1).toUpperCase();
      categoriesTitle = title.concat(category.slice(1));

      categoriesImages = category.split(' ').join('-');

      categories.push({ title: categoriesTitle, image: categoriesImages });

      prevCategory = category;
    }
  });

  return categories;
};

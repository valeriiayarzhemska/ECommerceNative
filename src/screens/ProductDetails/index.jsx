import React, { useCallback, useRef, useState } from 'react';
import { Image, ScrollView, Text, View, Animated } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import StarRating from 'react-native-star-rating-widget';

import { useDispatch, useSelector } from 'react-redux';
import { useGetProductQuery } from '../../store/redux/services/products/productsApi';
import {
  selectCartList,
  selectWishList,
} from '../../store/redux/features/products/productsSelectors';
import { updateWishList } from '../../store/redux/features/products/productsActions';
import { setCartList } from '../../store/redux/features/products/productsSlice';

import { ButtonTemplate } from '../../components/ButtonTemplate';
import { QuantitySelect } from '../../components/QuantitySelect';
import { CartIcon, CheckIcon, HeartIcon } from '../../assets/icons';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonProductDetails } from '../../components/Skeletons/SkeletonProductDetails';

import { colors } from '../../constants';
import {
  handleBackClick,
  setProductsWishList,
  updateProductsCartList,
} from '../../utils';

import { styles } from './style';

export const ProductDetails = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const {
    data: product,
    isLoading,
    isFetching,
    error: productError,
  } = useGetProductQuery(params.id, {
    refetchOnMountOrArgChange: true,
  });
  const userWishList = useSelector(selectWishList);
  const userCartList = useSelector(selectCartList);
  const [quantity, setQuantity] = useState('1');
  const [isAddingLoading, setIsAddingLoading] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowAddedToCart(false);
    });
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        fadeOut();
      }, 2000);
    });
  };

  const handleCartClick = () => {
    navigation.navigate('Cart', {
      goFrom: 'ProductDetails',
    });
  };

  const handleAddToCart = async () => {
    setIsAddingLoading(true);

    try {
      updateProductsCartList(
        product,
        quantity,
        userCartList,
        dispatch,
        setCartList,
      );

      setShowAddedToCart(true);
      fadeIn();

      setIsAddingLoading(false);
    } catch (error) {
      console.log(error);
      setIsAddingLoading(false);
    }
  };

  const handleAddToWishList = () => {
    setProductsWishList(product, userWishList, dispatch, updateWishList);
  };

  const handleRating = () => {};

  useFocusEffect(handleBackClick(params.goFrom, navigation, useCallback));

  return (
    <>
      <ScrollView style={stylesShema.container}>
        <View style={stylesShema.header}>
          <CustomHeader
            isButtonBack={true}
            backScreen={params.goFrom}
            isButtonRight={true}
            buttonRight={
              <ButtonTemplate
                icon={CartIcon}
                iconWidth={28}
                iconHeight={28}
                handleClick={handleCartClick}
                isRounded={true}
                isRoundedSmall={true}
                isTransparent={true}
              />
            }
          />
        </View>

        {isLoading ||
          (isFetching && (
            <SkeletonProductDetails isLoading={isLoading || isFetching} />
          ))}

        {product && (
          <>
            <View style={stylesShema.imageContainer}>
              <Image
                style={stylesShema.image}
                source={{ uri: product.image }}
              />
            </View>

            <View style={stylesShema.content}>
              <View style={stylesShema.contentHeader}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{product.title}</Text>
                </View>

                <View style={stylesShema.favButton}>
                  <ButtonTemplate
                    icon={HeartIcon}
                    iconColor={
                      userWishList.some(item => item.id === product.id)
                        ? colors.red
                        : ''
                    }
                    iconWidth={24}
                    iconHeight={24}
                    handleClick={handleAddToWishList}
                    isRounded={true}
                    isRoundedSmall={true}
                    isTransparent={true}
                  />
                </View>
              </View>

              <View style={stylesShema.priceContainer}>
                <Text style={stylesShema.price}>&#36; {product.price}</Text>
              </View>

              <View style={stylesShema.reviewsContainer}>
                <View style={stylesShema.starsContainer}>
                  <StarRating
                    rating={product.rating.rate}
                    onChange={handleRating}
                    starSize={20}
                    starStyle={stylesShema.stars}
                  />
                </View>

                <View style={stylesShema.reviewContainer}>
                  <Text style={stylesShema.review}>
                    {`(${product.rating.count} REVIEWER)`}
                  </Text>
                </View>
              </View>

              <View style={stylesShema.descriptionContainer}>
                <Text style={stylesShema.description}>
                  {product.description}
                </Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      <View style={stylesShema.footer}>
        <View style={stylesShema.contentContainer}>
          <View style={stylesShema.quantityContainer}>
            <View style={stylesShema.quantityTextContainer}>
              <Text style={stylesShema.quantity}>QTY</Text>
            </View>

            <QuantitySelect quantity={quantity} setQuantity={setQuantity} />
          </View>

          {showAddedToCart && (
            <Animated.View
              style={[stylesShema.addedToCart, { opacity: fadeAnim }]}
            >
              <Text style={stylesShema.addedToCartText}>Added to cart</Text>

              <CheckIcon color={colors.green} />
            </Animated.View>
          )}
        </View>

        <View style={stylesShema.button}>
          <ButtonTemplate
            text={t('addToCart')}
            handleClick={handleAddToCart}
            isLoadingData={isLoading || isFetching}
            disabled={isAddingLoading}
          />
        </View>
      </View>
    </>
  );
};

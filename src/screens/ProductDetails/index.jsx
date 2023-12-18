import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from 'react-native-star-rating-widget';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { useGetProductQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/auth/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import {
  CartIcon,
  HeartIcon,
  Logo,
  MinusIcon,
  PlusIcon,
  UserIcon,
} from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';
import Carousel from 'react-native-snap-carousel';
import { handleBackClick, setProductsWishList } from '../../utils';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonProductDetails } from '../../components/Skeletons/SkeletonProductDetails';
import { selectWishList } from '../../store/redux/features/products/productsSelectors';
import { updateWishList } from '../../store/redux/features/products/productsActions';

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
  const [quantity, seyQuantity] = useState('1');

  const handleAddToCart = () => {};

  const handleAddToWishList = () => {
    setProductsWishList(product, userWishList, dispatch, updateWishList);
  };

  const handleRating = () => {};

  const handleQuantityIncrease = () => {
    seyQuantity((Number(quantity) + 1).toString());
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      seyQuantity((Number(quantity) - 1).toString());
    }
  };

  useFocusEffect(handleBackClick(params.goFrom, navigation, useCallback));

  return (
    <>
      <ScrollView style={stylesShema.container}>
        <View style={stylesShema.header}>
          <CustomHeader
            isButtonBack={true}
            isButtonRight={true}
            buttonRight={
              <ButtonTemplate
                icon={CartIcon}
                iconWidth={28}
                iconHeight={28}
                handleClick={handleAddToCart}
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
        <View style={stylesShema.quantityContainer}>
          <View>
            <Text style={stylesShema.quantity}>QTY</Text>
          </View>

          <View style={stylesShema.quantitySelect}>
            <TouchableOpacity
              style={stylesShema.quantityButton}
              onPress={handleQuantityDecrease}
              disabled={isLoading || isFetching}
            >
              <MinusIcon width={8} />
            </TouchableOpacity>

            <TextInput
              style={stylesShema.quantityInput}
              onChangeText={seyQuantity}
              value={quantity}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={stylesShema.quantityButton}
              onPress={handleQuantityIncrease}
              disabled={isLoading || isFetching}
            >
              <PlusIcon width={8} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylesShema.buttons}>
          <ButtonTemplate
            text={t('addToCart')}
            handleClick={handleAddToCart}
            isOutline={true}
            isHalfed={true}
            isLoadingData={isLoading || isFetching}
          />

          <ButtonTemplate
            text={t('buyNow')}
            handleClick={handleAddToCart}
            isHalfed={true}
            isLoadingData={isLoading || isFetching}
          />
        </View>
      </View>
    </>
  );
};

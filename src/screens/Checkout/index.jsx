import React, { useCallback, useRef, useState } from 'react';
import { Image, ScrollView, Text, View, Animated, Button } from 'react-native';
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
import {
  CartIcon,
  CheckIcon,
  DownArrow,
  EditIcon,
  HeartIcon,
} from '../../assets/icons';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonProductDetails } from '../../components/Skeletons/SkeletonProductDetails';

import { colors } from '../../constants';
import {
  capitalizedValue,
  handleBackClick,
  setProductsWishList,
  updateProductsCartList,
} from '../../utils';

import { styles } from './style';
import { selectUser } from '../../store/redux/features/auth/authSelectors';

export const Checkout = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const { goFrom } = params;
  const [quantity, setQuantity] = useState('1');
  const [isAddingLoading, setIsAddingLoading] = useState(false);
  const [isPickUpActive, setIsPickUpActive] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const userCartList = useSelector(selectCartList);
  const user = useSelector(selectUser);
  const { name, address } = user;
  const { city, street, zipcode } = address;

  const handleCartClick = () => {
    navigation.navigate('Cart', {
      goFrom: 'ProductDetails',
    });
  };

  const handleDeliveryClick = () => {
    setIsPickUpActive(!isPickUpActive);
  };

  const handlePickUpClick = () => {
    setIsPickUpActive(!isPickUpActive);
  };

  useFocusEffect(handleBackClick(goFrom, navigation, useCallback));

  return (
    <>
      <ScrollView style={stylesShema.container}>
        <View style={stylesShema.header}>
          <CustomHeader isButtonBack={true} />
        </View>

        {/* {isLoading ||
          (isFetching && (
            <SkeletonProductDetails isLoading={isLoading || isFetching} />
          ))} */}

        {userCartList && user && (
          <View style={stylesShema.containerContent}>
            <View style={stylesShema.buttons}>
              <ButtonTemplate
                text={t('delivery')}
                handleClick={handleDeliveryClick}
                isTransparent={isPickUpActive}
                isHalfed={true}
              />

              <ButtonTemplate
                text={t('pickUp')}
                handleClick={handlePickUpClick}
                isTransparent={!isPickUpActive}
                isHalfed={true}
              />
            </View>

            <View style={stylesShema.orderContainer}>
              <TouchableOpacity style={stylesShema.orderButton}>
                <Text>{t('order')}</Text>

                <DownArrow />
              </TouchableOpacity>

              <View style={stylesShema.ordersContainer}>
                {}
              </View>
            </View>

            <View style={stylesShema.paymentContainer}>
              <View style={stylesShema.payment}>
                <View style={stylesShema.text}>
                  <Text>{t('paymentSum')}</Text>
                </View>

                <View style={stylesShema.cash}>
                  <Text>{t('cash')}</Text>
                </View>
              </View>

              <View style={stylesShema.deliveryFee}>
                <Text>{t('deliveryFee')}</Text>
              </View>

              <View style={stylesShema.totalPrice}>
                <Text>{t('totalPrice')}</Text>
              </View>
            </View>

            <View style={stylesShema.delivery}>
              <View style={stylesShema.delivery}>
                <Text>{t('deliveryAddress')}</Text>
              </View>

              <View style={stylesShema.delivery}>
                <Text>
                  {`${capitalizedValue(name.firstname)} ${capitalizedValue(
                    name.lastname,
                  )}`}
                </Text>
              </View>

              <View style={stylesShema.delivery}>
                <Text>{}</Text>
              </View>

              <View
                style={stylesShema.editButton}
                handleClick={handleDeliveryClick}
              >
                <View>
                  <EditIcon />
                </View>

                <Text>{t('editAddress')}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={stylesShema.checkoutButton}
              onPress={handleDeliveryClick}
            >
              <ButtonTemplate
                text={t('checkOut')}
                handleClick={handleDeliveryClick}
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </>
  );
};

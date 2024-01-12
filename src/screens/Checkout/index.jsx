import React, { useCallback, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import StarRating from 'react-native-star-rating-widget';
import * as Yup from 'yup';

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
  UpArrow,
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
import { OrderItem } from '../../components/OrderItem';
import { FormTemplateAddress } from '../../components/FormTemplateAddress';
import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/delivery-mock';

export const Checkout = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const { totalPrice, goFrom } = params;
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isAddingLoading, setIsAddingLoading] = useState(false);
  const [isPickUpActive, setIsPickUpActive] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const userCartList = useSelector(selectCartList);
  const user = useSelector(selectUser);
  const { name, address } = user;
  const { city, street, zipcode } = address;
  const cityName = capitalizedValue(city);
  const streetName = capitalizedValue(street);
  const userAddress = `${cityName}, ${streetName}, ${zipcode}`;

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

  const handleOpenOrders = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const handleSubmit = () => {
    console.log('5555555')
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

            <TouchableOpacity
              style={[stylesShema.ordersButton, stylesShema.itemContainer]}
              onPress={handleOpenOrders}
            >
              <Text style={stylesShema.title}>{t('order')}</Text>

              {isOrderOpen ? <UpArrow /> : <DownArrow />}
            </TouchableOpacity>

            {isOrderOpen && (
              <View style={stylesShema.orders}>
                {userCartList.map(product => (
                  <OrderItem product={product} />
                ))}
              </View>
            )}

            <View
              style={[stylesShema.paymentContainer, stylesShema.itemContainer]}
            >
              <View style={stylesShema.payment}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('paymentSum')}</Text>
                </View>

                <View style={stylesShema.cashContainer}>
                  <Text style={stylesShema.cash}>{t('cash')}</Text>
                </View>
              </View>

              <View
                style={[
                  stylesShema.deliveryFeeContainer,
                  stylesShema.priceContainer,
                ]}
              >
                <Text style={stylesShema.price}>{t('deliveryFee')}</Text>
                <Text style={[stylesShema.price, stylesShema.priceNumber]}>
                  &#36; 0
                </Text>
              </View>

              <View style={stylesShema.priceContainer}>
                <Text style={stylesShema.price}>{t('totalPrice')}</Text>
                <Text style={[stylesShema.price, stylesShema.priceNumber]}>
                  &#36; {totalPrice.toFixed(2)}
                </Text>
              </View>
            </View>

            <View
              style={[stylesShema.deliveryContainer, stylesShema.itemContainer]}
            >
              <View style={stylesShema.userData}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('deliveryAddress')}</Text>
                </View>

                <View style={stylesShema.deliveryContent}>
                  <Text style={stylesShema.userNameText}>
                    {`${capitalizedValue(name.firstname)} ${capitalizedValue(
                      name.lastname,
                    )}`}
                  </Text>
                </View>

                <View style={stylesShema.deliveryContent}>
                  <Text>{userAddress}</Text>
                </View>

                <TouchableOpacity
                  style={stylesShema.editButton}
                  onPress={handleDeliveryClick}
                >
                  <View>
                    <EditIcon width={16} height={16} />
                  </View>

                  <Text style={stylesShema.editButtonText}>
                    {t('editAddress')}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={stylesShema.form}>
                <FormTemplateAddress
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    country: '',
                    state: '',
                    city: '',
                    street: '',
                    zipcode: '',
                  }}
                  validationSchema={Yup.object({
                    firstName: validationSchema?.firstName,
                    lastName: validationSchema?.lastName,
                    country: validationSchema?.country,
                    state: validationSchema?.state,
                    city: validationSchema?.city,
                    street: validationSchema?.street,
                  })}
                  handleSubmitForm={handleSubmit}
                  buttonText={t('saveText')}
                  //isLoadingData={isLoading}
                />
              </View>
            </View>

            <TouchableOpacity
              style={stylesShema.checkoutButton}
              onPress={handleDeliveryClick}
            >
              <ButtonTemplate
                text={t('checkOut')}
                handleClick={handleDeliveryClick}
                isOutline={true}
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </>
  );
};
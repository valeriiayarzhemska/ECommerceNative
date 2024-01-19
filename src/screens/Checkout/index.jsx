import React, { useCallback, useRef, useState } from 'react';
import {
  SafeAreaView,
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
import {
  deleteCartData,
  updateWishList,
} from '../../store/redux/features/products/productsActions';
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
import { setUserInfo } from '../../store/redux/features/auth/authActions';
import { GeoMap } from '../../components/GeoMap';
import { ModalWindow } from '../../components/ModalWindow';

export const Checkout = ({ route }) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigation = useNavigation();

  const { params } = route;
  const { totalPrice, goFrom } = params;
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isPickUpActive, setIsPickUpActive] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);

  const userCartList = useSelector(selectCartList);
  const user = useSelector(selectUser);
  const { name, address } = user;
  const { city, street, zipcode } = address;
  const userFirstName = capitalizedValue(name.firstname);
  const userLastName = capitalizedValue(name.lastname);
  const countryName = address.country ? capitalizedValue(address.country) : '';
  const stateName = address.state ? capitalizedValue(address.state) : '';
  const cityName = capitalizedValue(city);
  const streetName = capitalizedValue(street);
  let userAddress = `${cityName}, ${streetName}, ${zipcode}`;

  if (countryName && !cityName) {
    userAddress = `${countryName}, ${streetName}, ${zipcode}`;
  } else if (countryName && cityName) {
    userAddress = `${countryName}, ${stateName}, ${cityName}, ${streetName}, ${zipcode}`;
  }

  const handleDeliveryClick = () => {
    setIsCheckOut(true);
  };

  const handleModalClose = async () => {
    await dispatch(deleteCartData());

    setIsCheckOut(false);
    navigation.goBack();
  };

  const handlePickUpClick = () => {
    setIsPickUpActive(!isPickUpActive);
  };

  const handleOpenOrders = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const handleSubmit = async ({
    firstName,
    lastName,
    country,
    state,
    city,
    street,
    zipcode,
  }) => {
    setIsLoadingData(true);

    try {
      await dispatch(
        setUserInfo({
          name: { firstname: firstName, lastname: lastName },
          address: { country, state, city, street, zipcode },
        }),
      );

      setIsEditOpen(false);
      console.log(isEditOpen);
      setIsLoadingData(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useFocusEffect(handleBackClick(goFrom, navigation, useCallback));

  return (
    <SafeAreaView style={stylesShema.container}>
      <ScrollView style={stylesShema.container}>
        <View style={stylesShema.header}>
          <CustomHeader isButtonBack={true} />
        </View>

        {userCartList && user && (
          <View style={stylesShema.containerContent}>
            <View style={stylesShema.buttons}>
              <ButtonTemplate
                text={t('delivery')}
                handleClick={handlePickUpClick}
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
                  <OrderItem product={product} key={product.id} />
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
              <View style={stylesShema.titleContainer}>
                <Text style={stylesShema.title}>{t('deliveryAddress')}</Text>
              </View>

              {isPickUpActive ? (
                <View style={stylesShema.userData}>
                  <View style={stylesShema.deliveryContent}>
                    <View style={stylesShema.deliveryContent}>
                      <Text>
                        {t('receiver')}
                        {`${userFirstName} ${userLastName}`}
                      </Text>
                    </View>

                    <View style={stylesShema.deliveryContent}>
                      <Text>
                        {t('pickupAddress')}
                        {t('companyAddress')}
                      </Text>
                    </View>
                  </View>

                  <GeoMap />
                </View>
              ) : (
                <>
                  {isEditOpen ? (
                    <View style={stylesShema.form}>
                      <FormTemplateAddress
                        initialValues={{
                          firstName: userFirstName,
                          lastName: userLastName,
                          country: '',
                          state: '',
                          city: '',
                          street: streetName,
                          zipcode: address.zipcode,
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
                        isDelivery={true}
                        isLoadingData={isLoadingData}
                      />
                    </View>
                  ) : (
                    <View style={stylesShema.userData}>
                      <View style={stylesShema.deliveryContent}>
                        <Text style={stylesShema.userNameText}>
                          {`${userFirstName} ${userLastName}`}
                        </Text>
                      </View>

                      <View style={stylesShema.deliveryContent}>
                        <Text>{userAddress}</Text>
                      </View>

                      <TouchableOpacity
                        style={stylesShema.editButton}
                        onPress={() => setIsEditOpen(true)}
                      >
                        <View>
                          <EditIcon width={16} height={16} />
                        </View>

                        <Text style={stylesShema.editButtonText}>
                          {t('editAddress')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              )}
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

        <ModalWindow
          isCheckOut={isCheckOut}
          setIsCheckOut={setIsCheckOut}
          modalText={t('succesOrder')}
          secondModalText={t('contactYou')}
          closeText={t('buttonCancel')}
          handleCloseButtonClick={handleModalClose}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

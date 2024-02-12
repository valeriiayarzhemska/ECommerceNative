import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { logout, setLang } from '../../store/redux/features/auth/authSlice';
import { useDeleteUserMutation } from '../../store/redux/services/user/userApi';

import { RightArrow } from '../../assets/icons';
import { ModalWindow } from '../ModalWindow';
import { colors } from '../../constants';

import { styles } from './style';
import { selectLanguage } from '../../store/redux/features/auth/authSelectors';

export const SettingsItem = ({ userId = '', item }) => {
  const stylesShema = styles(isRed);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const userLang = useSelector(selectLanguage);
  console.log(userLang)
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedRadioButton, setSelectedRadioButton] = useState('');
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const {
    name,
    goTo = '',
    title = '',
    icon = '',
    isNewScreen = false,
    isModal = false,
    isRed = false,
    isRadioButtons = false,
    radioButtons = [],
  } = item;
  const IconComponent = icon;

  const handleItemClick = () => {
    if (isNewScreen) {
      navigation.navigate(goTo, {
        name: name,
        goFrom: 'Profile',
      });
    }

    if (isModal) {
      setIsModalActive(true);
    }
  };

  const updatedRadioButtons = radioButtons.map(lang => {
    if (lang.value === userLang) {
      return { ...lang, selected: true };
    }

    return lang;
  });

  const handleLangChange = async () => {
    try {
      await dispatch(setLang(selectedRadioButton));
      await i18n.changeLanguage(selectedRadioButton);
      setIsModalActive(false);
    } catch (error) {
      console.log('Can not change the language: ', error);
      setIsModalActive(false);
    }
  };

  const handleLogOut = async () => {
    await dispatch(logout());
    setIsModalActive(false);
  };

  const handleRemoveUser = async () => {
    try {
      await deleteUser(userId);
      await dispatch(logout());

      setIsModalActive(false);
    } catch (error) {
      console.log('Can not delete the user: ', error);
      setIsModalActive(false);
    }
  };

  const handleModalClose = () => {
    switch (name) {
      case 'changeLanguage':
        handleLangChange();
        break;

      case 'logout':
        handleLogOut();
        break;

      case 'removeAccount':
        handleRemoveUser();
        break;

      default:
        setIsModalActive(false);
        console.log('default');
    }
  };

  return (
    <>
      <TouchableOpacity
        style={stylesShema.itemContainer}
        onPress={handleItemClick}
      >
        <View style={stylesShema.contentContainer}>
          <View style={stylesShema.icon}>
            {IconComponent && (
              <IconComponent
                width={20}
                height={20}
                color={isRed ? colors.red : colors.lightGray}
              />
            )}
          </View>

          <View style={stylesShema.titleContainer}>
            <Text style={stylesShema.title}>{t(`${name}`)}</Text>
          </View>
        </View>

        {isNewScreen && (
          <View style={stylesShema.arrowContainer}>
            <RightArrow color={colors.lightGray} width={24} height={24} />
          </View>
        )}
      </TouchableOpacity>

      {isModal && (
        <View style={stylesShema.modalContainer}>
          <ModalWindow
            isClicked={isModalActive}
            setIsClicked={setIsModalActive}
            closeText={t('okText')}
            title={t(title)}
            modalText={t(title)}
            isRadioButtons={isRadioButtons}
            radioButtons={radioButtons.length > 0 ? updatedRadioButtons : []}
            handleOkButtonClick={handleModalClose}
            selectedRadioButton={selectedRadioButton}
            setSelectedRadioButton={setSelectedRadioButton}
          />
        </View>
      )}
    </>
  );
};

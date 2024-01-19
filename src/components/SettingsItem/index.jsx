import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { colors } from '../../constants';
import { RightArrow } from '../../assets/icons';

export const SettingsItem = ({ item }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const {
    id,
    name,
    goTo = '',
    icon,
    isNewScreen = false,
    isModal = false,
    isRed = false,
  } = item;
  const IconComponent = icon;
  const stylesShema = styles(isRed);
  const { t } = useTranslation();
  const navigation = useNavigation();

  /* const initialValues = [
    {'editProfile': {
      
    },}
  ]; */

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

  return (
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
  );
};

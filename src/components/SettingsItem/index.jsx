import React from 'react';
import { Image, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './style';
import { colors } from '../../constants';

export const SettingsItem = ({ item }) => {
  const stylesShema = styles();
  const { t } = useTranslation();


  const { id, name, goTo = '', icon, isModal = false, isRed = false } = item;
  const IconComponent = icon;

  return (
    <View style={stylesShema.itemContainer}>
      <View style={stylesShema.icon}>
        {IconComponent && (
          <IconComponent width={24} height={24} color={colors.lightGray} />
        )}
      </View>

      <View style={stylesShema.titleContainer}>
        <Text style={stylesShema.title}>{t(`${name}`)}</Text>
      </View>
    </View>
  );
};

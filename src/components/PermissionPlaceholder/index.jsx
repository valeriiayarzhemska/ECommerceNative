import React from 'react';
import { View, Text, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ButtonTemplate } from '../ButtonTemplate';

import { styles } from './style';

export const PermissionPlaceholder = ({ text }) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const handleClick = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={stylesShema.container}>
      <Text style={stylesShema.text}>{t(text)}</Text>
      <ButtonTemplate
        text={t('goToSettings')}
        handleClick={handleClick}
        isTransparent={true}
      />
    </View>
  );
};

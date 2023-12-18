import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './style';

export const ErrorComponentMessage = ({ message }) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  return (
    <View style={stylesShema.errorContainer}>
      <Text style={stylesShema.errorText}>{t(message)}</Text>
    </View>
  );
};

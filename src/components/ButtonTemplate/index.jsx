import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';

export const ButtonTemplate = ({
  text = '',
  handleClick = () => false,
  icon,
  size = 'full',
  isProduct = false,
  isOutline = false,
  isSided = false,
}) => {
  const stylesShema = styles(size, isProduct, isOutline, isSided);
  const IconComponent = icon;

  return (
    <View
      style={[
        stylesShema.container,
        isProduct ? stylesShema.containerProduct : null,
      ]}>
      <TouchableOpacity onPress={handleClick} style={stylesShema.button}>
        {IconComponent && (
          <View style={stylesShema.icon}>
            <IconComponent />
          </View>
        )}

        <Text
          style={[
            stylesShema.text,
            isProduct ? stylesShema.textProduct : null,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

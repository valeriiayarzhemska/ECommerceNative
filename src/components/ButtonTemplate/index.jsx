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
}) => {
  const stylesShema = styles(size, isProduct, isOutline);
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
            <IconComponent color="#ffffff" width={13} height={13} />
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

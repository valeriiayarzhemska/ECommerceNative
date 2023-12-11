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
  isLoadingData = false,
  isRounded = false,
  iconWidth,
}) => {
  const stylesShema = styles(size, isProduct, isOutline, isSided);
  const IconComponent = icon;

  return (
    <View
      style={[
        stylesShema.container,
        isProduct ? stylesShema.containerProduct : null,
      ]}>
      <TouchableOpacity
        style={[
          stylesShema.button,
          isRounded ? stylesShema.buttonRounded : null
        ]}
        onPress={handleClick}
        disabled={isLoadingData}>
        {IconComponent && (
          <View style={stylesShema.icon}>
            <IconComponent width={iconWidth} />
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

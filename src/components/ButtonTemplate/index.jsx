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
  isRoundedSmall = false,
  iconWidth,
  iconHeight,
  iconColor,
  isTransparent = false,
  isHalfed = false,
  isMiddle = false,
  isSmall = false,
  isSearch = false,
}) => {
  const stylesShema = styles(
    size,
    isProduct,
    isOutline,
    isSided,
    isRoundedSmall,
    isHalfed,
    isSmall,
  );
  const IconComponent = icon;

  return (
    <View
      style={[
        stylesShema.container,
        isProduct ? stylesShema.containerProduct : null,
        isHalfed ? stylesShema.containerHalf : null,
      ]}
    >
      <TouchableOpacity
        style={[
          stylesShema.button,
          isRounded ? stylesShema.buttonRounded : null,
          isTransparent ? stylesShema.buttonTransparent : null,
          isSmall ? stylesShema.buttonSmall : null,
          isMiddle ? stylesShema.buttonMiddle : null,
          isSearch ? stylesShema.buttonSearch : null,
        ]}
        onPress={handleClick}
        disabled={isLoadingData}
      >
        {IconComponent && (
          <View
            style={[
              stylesShema.icon,
              isRounded ? stylesShema.iconRounded : null,
            ]}
          >
            <IconComponent
              width={iconWidth}
              height={iconHeight}
              color={iconColor}
            />
          </View>
        )}

        <Text
          style={[
            stylesShema.text,
            isProduct ? stylesShema.textProduct : null,
            isSmall ? stylesShema.textSmall : null,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
  isDisabled = false,
}) => {
  const stylesShema = styles(size, isOutline, isSided, isRoundedSmall);
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
          isDisabled ? stylesShema.buttonDisabled : null,
        ]}
        onPress={handleClick}
        disabled={isLoadingData || isDisabled}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
            isSmall || isMiddle ? stylesShema.textSmall : null,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

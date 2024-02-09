import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { BackArrow } from '../../assets/icons';

import { styles } from './style';

export const CustomHeader = ({
  title = '',
  buttonLeft,
  buttonRight,
  isTitled = false,
  isButtonBack = false,
  backScreen = '',
  isButtonLeft = false,
  isButtonRight = false,
}) => {
  const stylesShema = styles(
    isButtonLeft,
    isButtonRight,
    isButtonBack,
    isTitled,
  );
  const navigation = useNavigation();

  const handleClickArrow = () => {
    navigation.navigate(backScreen);
  };

  return (
    <View style={stylesShema.header}>
      {isButtonLeft && <View>{buttonLeft}</View>}

      {isButtonBack && (
        <View>
          <ButtonTemplate
            icon={BackArrow}
            iconWidth={24}
            iconHeight={24}
            handleClick={handleClickArrow}
            isRounded={true}
            isRoundedSmall={true}
            isTransparent={true}
          />
        </View>
      )}

      {isTitled && (
        <View style={stylesShema.titleContainer}>
          <Text style={stylesShema.title}>{title}</Text>
        </View>
      )}

      {isButtonRight && <View>{buttonRight}</View>}
    </View>
  );
};

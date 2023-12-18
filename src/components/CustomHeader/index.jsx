import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonTemplate } from '../ButtonTemplate';
import { BackArrow, Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';

export const CustomHeader = ({
  title = '',
  buttonLeft,
  buttonRight,
  isTitled = false,
  isButtonBack = false,
  isButtonLeft = false,
  isButtonRight = false,
}) => {
  const stylesShema = styles();
  const navigation = useNavigation();

  const handleClickArrow = () => {
    navigation.goBack();
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

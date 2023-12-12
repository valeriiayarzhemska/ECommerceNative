import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { ButtonTemplate } from '../ButtonTemplate';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { Loader } from '../Loader';

export const CatalogHeader = ({}) => {
  const stylesShema = styles();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.header}>
        <View style={stylesShema.logo}>
          <Logo width={40} height={40} />
        </View>

        <View style={stylesShema.profileIcon}>
          <ButtonTemplate
            icon={UserIcon}
            iconWidth={30}
            handleClick={handleLogOut}
            isRounded={true}
          />
        </View>
      </View>

      <View style={stylesShema.search}>
      </View>

      <View>
        <Text>Product slider</Text>
      </View>

      <View>
        <Text>Product categories slider</Text>
      </View>
    </View>
  );
};

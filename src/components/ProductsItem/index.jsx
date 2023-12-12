import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';
import { ButtonTemplate } from '../ButtonTemplate';
import { HeartIcon, PlusIcon } from '../../assets/icons';
import { colors } from '../../constants';

export const ProductsItem = ({ product }) => {
  const stylesShema = styles();

  const productTitleSplited = product.title.split(' ');
  const productTitleSliced = productTitleSplited.slice(0, 3).join(' ');
  const productTitle =
    productTitleSplited.length > 4
      ? productTitleSliced + ' ...'
      : productTitleSliced;

  const handleClick = (id) => {
    
  };

  const handleAddToCart = () => {};

  console.log(product.category);

  return (
    <TouchableOpacity style={stylesShema.container} onPress={() => handleClick(product.id)}>
      <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} source={{ uri: product.image }} />

        <View style={stylesShema.favButton}>
          <ButtonTemplate
            icon={HeartIcon}
            iconColor={colors.red}
            iconWidth={18}
            handleClick={handleAddToCart}
            isRounded={true}
            isRoundedSmall={true}
            isTransparent={true}
          />
        </View>
      </View>

      <View style={stylesShema.content}>
        <View style={stylesShema.titleContainer}>
          <Text style={stylesShema.title}>{productTitle}</Text>
        </View>

        <View style={stylesShema.footer}>
          <View style={stylesShema.priceContainer}>
            <Text style={stylesShema.price}>&#36; {product.price}</Text>
          </View>

          <View>
            <ButtonTemplate
              icon={PlusIcon}
              iconWidth={15}
              handleClick={handleAddToCart}
              isRounded={true}
              isRoundedSmall={true}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

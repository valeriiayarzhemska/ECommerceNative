import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { styles } from './style';

export const OrderItem = ({ product }) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const { image, price, quantity, title } = product;

  return (
    <>
      {product && (
        <View style={stylesShema.container}>
          <View style={stylesShema.imageContainer}>
            <Image style={stylesShema.image} source={{ uri: image }} />
          </View>

          <View style={stylesShema.header}>
            <View style={stylesShema.contentHeader}>
              <View style={stylesShema.content}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{title}</Text>
                </View>

                <View style={stylesShema.priceContainer}>
                  <Text style={stylesShema.price}>&#36; {price}</Text>
                </View>
              </View>
            </View>

            <View style={stylesShema.footer}>
              <View style={stylesShema.quantityContainer}>
                <Text style={stylesShema.footerText}>
                  {t('quantityProduct')} {quantity}
                </Text>
              </View>

              <View style={stylesShema.totalContainer}>
                <Text style={[stylesShema.footerText, stylesShema.total]}>
                  {t('totalPrice')} &#36; {(price * quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

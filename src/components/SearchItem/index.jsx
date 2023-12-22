import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

import { sliceProductTitle } from '../../utils';

import { styles } from './style';
import { StarIcon } from '../../assets/icons';
import { colors } from '../../constants';

export const SearchItem = ({ product }) => {
  const stylesShema = styles();

  const navigation = useNavigation();

  const { id, title, image, price, rating } = product;

  const titleSplited = sliceProductTitle(title);

  const handleRating = () => {};

  const handleClickResult = id => {
    navigation.navigate('ProductDetails', {
      id: id,
      goFrom: 'ProductsItem',
    });
  };

  return (
    <TouchableOpacity
      style={stylesShema.container}
      onPress={() => handleClickResult(id)}
    >
      <View style={stylesShema.imageContainer}>
        <Image style={stylesShema.image} source={{ uri: image }} />
      </View>

      <View style={stylesShema.content}>
        <View>
          <View style={stylesShema.titleContainer}>
            <Text style={stylesShema.title}>{titleSplited}</Text>
          </View>

          <View style={stylesShema.reviewsContainer}>
            <View style={stylesShema.starContainer}>
              <StarRatingDisplay
                rating={rating.rate}
                starSize={20}
                starStyle={stylesShema.stars}
              />
            </View>

            <View style={stylesShema.reviewContainer}>
              <Text
                style={stylesShema.review}
              >{`(${rating.count} reviewer)`}</Text>
            </View>
          </View>
        </View>

        <View style={stylesShema.priceContainer}>
          <Text style={stylesShema.price}>&#36; {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

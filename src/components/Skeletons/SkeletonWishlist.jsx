import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { styles } from '../../components/WishListItem/style';

export const SkeletonWishlist = ({ isLoading }) => {
  const stylesShema = styles();

  return (
    <>
      {isLoading && (
        <SkeletonPlaceholder>
          <View style={stylesShema.container}>
            <View style={stylesShema.containerSkeleton}></View>
          </View>
        </SkeletonPlaceholder>
      )}
    </>
  );
};

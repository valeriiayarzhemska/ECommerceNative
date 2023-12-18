import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { styles } from '../../screens/ProductDetails/style';

export const SkeletonProductDetails = ({ isLoading }) => {
  const stylesShema = styles();

  return (
    <>
      {isLoading && (
        <SkeletonPlaceholder>
          <View style={stylesShema.imageContainer}></View>

          <View style={stylesShema.contentSkeleton}></View>
        </SkeletonPlaceholder>
      )}
    </>
  );
};

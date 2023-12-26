import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { styles } from '../../screens/Catalog/style';

export const SkeletonCatalogItem = ({ isLoading }) => {
  const stylesShema = styles();

  return (
    <>
      {isLoading && (
        <SkeletonPlaceholder>
          <View style={stylesShema.container}>
            <View style={stylesShema.skeletonContainer}>
              <View style={stylesShema.skeletonList}>
                <View style={stylesShema.skeletonItem}></View>

                <View style={stylesShema.skeletonItem}></View>
              </View>

              <View style={stylesShema.skeletonList}>
                <View style={stylesShema.skeletonItem}></View>

                <View style={stylesShema.skeletonItem}></View>
              </View>
            </View>
          </View>
        </SkeletonPlaceholder>
      )}
    </>
  );
};

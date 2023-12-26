import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { styles } from '../../screens/Catalog/style';

export const SkeletonCatalog = ({ isLoading }) => {
  const stylesShema = styles();

  return (
    <>
      {isLoading && (
        <SkeletonPlaceholder>
          <View style={stylesShema.container}>
            <View>
              <View style={stylesShema.skeletonSlider}></View>

              <View style={stylesShema.skeletonCategories}></View>

              <View style={stylesShema.skeletonSort}></View>

              <View>
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
          </View>
        </SkeletonPlaceholder>
      )}
    </>
  );
};

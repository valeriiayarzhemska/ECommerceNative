import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';

export const BackgroundWrapper = ({ children, color }) => {
  const stylesShema = styles(color);

  return (
    <SafeAreaView edges={{ top: 'maximum', bottom: 'maximum' }}>
      <View style={[stylesShema.background]}></View>

      <ScrollView style={[stylesShema.container]}>
        <View style={stylesShema.children}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

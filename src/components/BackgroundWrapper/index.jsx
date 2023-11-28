import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';

export const BackgroundWrapper = ({ children }) => {
  const stylesShema = styles();

  return (
    <SafeAreaView edges={{ bottom: 'maximum' }}>
      <ScrollView style={[stylesShema.container]}>
        <View style={stylesShema.children}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

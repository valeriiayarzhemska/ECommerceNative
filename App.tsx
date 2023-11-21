import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>Helo World</Text>
      <TouchableOpacity style={{height: 20, backgroundColor: 'red'}}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

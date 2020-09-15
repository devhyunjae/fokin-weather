import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Getting the beautiful weather
    </Text>
  </View>
);

export default Loading;

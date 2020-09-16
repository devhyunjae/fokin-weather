import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

const Weather = ({ temp }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {temp}
    </Text>
  </View>
);

export default Weather;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const Weather = ({ temp, condition }) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <MaterialCommunityIcons name="smog" size={80} color="black" />
      <Text style={styles.text}>
        {temp}
        º
      </Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.text}>
        {condition}
      </Text>
    </View>
  </View>
);

export default Weather;

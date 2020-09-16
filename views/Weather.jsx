import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import shuffle from 'lodash/shuffle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  half: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const iconName = {
  Thunderstorm: 'weather-lightning',
  Drizzle: 'weather-rainy',
  Rain: 'weather-pouring',
  Snow: 'weather-snowy',
  Mist: 'weather-fog',
  Smoke: 'weather-fog',
  Haze: 'weather-fog',
  Dust: 'weather-fog',
  Fog: 'weather-fog',
  Sand: 'weather-fog',
  Clear: 'weather-sunny',
  Clouds: 'weather-cloudy',
};

const gradients = [
  ['#BA5370', '#F4E2D8'],
  ['#4CA1AF', '#C4E0E5'],
  ['#5A3F37', '#2C7744'],
  ['#5614B0', '#DBD65C'],
  ['#1e3c72', '#2a5298'],
  ['#114357', '#F29492'],
  ['#C02425', '#F0CB35'],
  ['#403A3E', '#BE5869'],
  ['#c2e59c', '#64b3f4'],
];

const Weather = ({ temp, condition, city }) => (
  <LinearGradient
    colors={shuffle(gradients)[0]}
    style={styles.container}
  >
    <StatusBar style='light' />
    <View style={styles.half}>
      <MaterialCommunityIcons name={iconName[condition] || 'weather-fog'} size={96} color='white' />
      <Text style={styles.text}>
        {temp}
        º
      </Text>
    </View>
    <View style={styles.half}>
      <Text style={styles.text}>
        {city}
      </Text>
      <Text style={styles.text}>
        {condition}
      </Text>
    </View>
  </LinearGradient>
);

export default Weather;

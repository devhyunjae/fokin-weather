import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert, View, Text } from 'react-native';
import axios from 'axios';
import Loading from './views/Loading';
import Weather from './views/Weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await Location.requestPermissionsAsync();
        const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync();
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d33d09e9828067cf206834b39082d2a0&units=metric`);
        setWeatherData(data);
      } catch (error) {
        Alert.alert('Cannot find your current location');
      }
    })();
  }, []);
  return (
    !weatherData ? <Loading />
      : (
        <Weather
          temp={Math.round(weatherData.main.temp)}
          condition={weatherData.weather[0].main}
          city={weatherData.name}
        />
      )
  );
};

export default App;

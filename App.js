import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert, View, Text } from 'react-native';
import axios from 'axios';
import Loading from './views/Loading';

const App = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        await Location.requestPermissionsAsync();
        const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync();
        setLocation({
          longitude,
          latitude,
        });
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d33d09e9828067cf206834b39082d2a0`);
        console.log('response', data);
      } catch (error) {
        Alert('Cannot find your current location');
      }
    })();
  }, []);

  if (location) {
    return (
      <View>
        <Text>
          { location.longitude}
        </Text>
        <Text>
          { location.latitude}
        </Text>
      </View>
    );
  }
  return (
    <Loading />
  );
};

export default App;

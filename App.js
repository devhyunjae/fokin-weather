import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Alert, View, Text } from 'react-native';
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

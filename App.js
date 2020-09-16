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
        // {
        //   "base": "stations",
        //   "clouds": Object {
        //     "all": 75,
        //   },
        //   "cod": 200,
        //   "coord": Object {
        //     "lat": 37.36,
        //     "lon": 127.05,
        //   },
        //   "dt": 1600218869,
        //   "id": 1835553,
        //   "main": Object {
        //     "feels_like": 297.61,
        //     "humidity": 83,
        //     "pressure": 1011,
        //     "temp": 295.64,
        //     "temp_max": 296.15,
        //     "temp_min": 294.15,
        //   },
        //   "name": "Suwon-si",
        //   "sys": Object {
        //     "country": "KR",
        //     "id": 8096,
        //     "sunrise": 1600204478,
        //     "sunset": 1600249135,
        //     "type": 1,
        //   },
        //   "timezone": 32400,
        //   "visibility": 9000,
        //   "weather": Array [
        //     Object {
        //       "description": "mist",
        //       "icon": "50d",
        //       "id": 701,
        //       "main": "Mist",
        //     },
        //   ],
        //   "wind": Object {
        //     "deg": 170,
        //     "speed": 2.1,
        //   },
        // }
        setWeatherData(data);
        console.log('response', data);
      } catch (error) {
        Alert('Cannot find your current location');
      }
    })();
  }, []);

  return (
    !weatherData ? <Loading /> : <Weather temp={Math.round(weatherData.main.temp)} />
  );
};

export default App;

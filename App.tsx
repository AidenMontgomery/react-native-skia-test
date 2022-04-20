/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SolarDiagram} from './components';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {DateTime} from 'luxon';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SolarDisplayData} from './SolarDisplayData';
import {SolarData} from './api';

const DATA_REQUEST_INTERVAL = 5000;
const TIME_UPDATE_INTERVAL = 1000;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [data, setData] = useState<SolarDisplayData>(SolarData.initialData);
  const [lastUpdated, setLastUpdated] = useState('Loading');
  const [mockData, setMockData] = useState(false);

  useEffect(() => {
    console.log(mockData);
    const intervalId = setInterval(async function () {
      setData(await SolarData.refresh(mockData));
    }, DATA_REQUEST_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [data, mockData]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const referenceDate = DateTime.fromJSDate(data.lastUpdated);
      const duration = DateTime.now().diff(referenceDate, [
        'hours',
        'minutes',
        'seconds',
      ]);

      const timeAgo = `${duration.hours > 0 ? `${duration.hours} h ` : ''}${
        duration.minutes > 0
          ? `${duration.minutes} m `
          : duration.hours > 0
          ? '0 m '
          : ''
      }${duration.seconds > 0 ? `${Math.floor(duration.seconds)} s` : '0 s'}`;

      setLastUpdated(timeAgo ?? 'Loading');
    }, TIME_UPDATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={isDarkMode ? Styles.lightText : Styles.darkText}>
        Last Updated : {lastUpdated}
      </Text>
      <View style={Styles.mockDataRow}>
        <Text style={isDarkMode ? Styles.lightText : Styles.darkText}>
          {'Mock Data : '}
        </Text>
        <Switch value={mockData} onValueChange={value => setMockData(value)} />
      </View>
      <SolarDiagram isDarkMode={isDarkMode} solarDisplayData={data} />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  darkText: {alignSelf: 'center', color: 'black'},
  lightText: {alignSelf: 'center', color: 'white'},
  mockDataRow: {flexDirection: 'row', justifyContent: 'center', marginTop: 10},
});

export default App;

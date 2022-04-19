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
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SolarDisplayData} from './SolarDisplayData';
import {SolarData} from './api';

const MOCK_DATA = true;
const DATA_REQUEST_INTERVAL = 1000;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const [data, setData] = useState<SolarDisplayData>(SolarData.initialData);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setData(await SolarData.refresh(MOCK_DATA));
    }, DATA_REQUEST_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [data]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SolarDiagram isDarkMode={isDarkMode} solarDisplayData={data} />
    </SafeAreaView>
  );
};

export default App;

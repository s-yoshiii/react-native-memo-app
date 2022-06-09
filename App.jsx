/* eslint-disable camelcase */
import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  // eslint-disable-next-line prefer-const
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <MemoListScreen />;
}

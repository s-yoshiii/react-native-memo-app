/* eslint-disable jsx-quotes */
/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerLogout}>
            <MaterialCommunityIcons name='logout' size={24} color='black' />
            Logout
          </Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <View style={styles.memoListTitle}>買い物リスト</View>
          <View style={styles.memoListDate}>2022/06/06 0:00:00</View>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 104,
    backgroundColor: '#876445',
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerLogout: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    fontFamily: 'Roboto_500Medium',
    letterSpacing: '0.1em',
    color: '#fff',
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 700,
    letterSpacing: '0.1em',
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
  },
  memoListItem: {
    backgroundColor: 'rgba(244,223,186,0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomColor: '#CA965C',
    borderBottomWidth: 1,
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoListDate: {
    fontSize: 10,
    lineHeight: 16,
    color: '#666666',
  },
  circleButton: {
    backgroundColor: '#876445',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});

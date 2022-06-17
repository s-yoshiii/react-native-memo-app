import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import Header from '../components/Header';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput value="Email Adress" />
        <TextInput value="Password" />
        <View>
          <Text>Not registered?</Text>
          <Text>Sign up here</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244,223,186,0.3)',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

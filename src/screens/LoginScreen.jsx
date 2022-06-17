import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import Header from '../components/Header';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text>Login</Text>
        <TextInput value="Email Adress" />
        <TextInput value="Password" />
      </View>
      <View>
        <Text>Not registered?</Text>
        <Text>Sign up here</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;

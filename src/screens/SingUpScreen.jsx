import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import Header from '../components/Header';
import Button from '../components/Button';

function SingUpScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Adress" />
        <TextInput style={styles.input} value="Password" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footerLink}>Log in</Text>
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
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 16,
    minHeight: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#876445',
  },
});

export default SingUpScreen;

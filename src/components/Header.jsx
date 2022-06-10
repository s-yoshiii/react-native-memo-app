/* eslint-disable jsx-quotes */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerLogout}>Logout</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    letterSpacing: '0.1em',
    color: '#fff',
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 700,
    letterSpacing: '0.1em',
    color: '#fff',
  },
});
export default Header;

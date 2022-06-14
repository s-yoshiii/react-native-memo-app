import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CircleButton from '../components/CircleButton';

import Header from '../components/Header';

function MemoEditScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {},
});
export default MemoEditScreen;

import React from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoEditScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value="買い物リスト"
          multiline
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <CircleButton
        name="check"
        color="#fff"
        onPress={() => {
          Alert.alert('Pressed');
        }}
      />
    </KeyboardSafeView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
export default MemoEditScreen;

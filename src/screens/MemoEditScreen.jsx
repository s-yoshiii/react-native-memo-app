import { shape, string } from 'prop-types';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
      </View>
      <CircleButton
        name="check"
        color="#fff"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardSafeView>
  );
}
MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};
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

import { shape, string } from 'prop-types';
import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Keyboard, Alert,
} from 'react-native';
import firebase from 'firebase';
import { translateErrors } from '../utils';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set({ bodyText: body, updatedAt: new Date() }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        });
    }
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => setBody(text)}
        />
      </View>
      <CircleButton name="check" color="#fff" onPress={handlePress} />
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
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 27,
    paddingTop: 32,
    paddingBottom: 32,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
export default MemoEditScreen;

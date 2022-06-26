import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref
      .add({
        bodyText,
        upDatedAt: new Date(),
      })
      .then((docRef) => {
        console.log('Created!', docRef.id);
      })
      .catch((error) => {
        console.log('error', error);
      });
    navigation.goBack();
  };
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          autoFocus
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            setBodyText(text);
          }}
        />
      </View>
      <CircleButton name="check" color="#fff" onPress={handlePress} />
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

export default MemoCreateScreen;

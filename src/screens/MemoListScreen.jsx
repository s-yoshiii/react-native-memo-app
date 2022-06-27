import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';

function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`);
      unscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      });
    }
    return unscribe;
  }, []);
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name="plus"
        color="#fff"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default MemoListScreen;

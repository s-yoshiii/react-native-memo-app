import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Alert, Text,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';
import Button from '../components/Button';
import Loading from '../components/Loading';

function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy('updatedAt', 'desc');
      unscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
          Alert.alert('データの読み込みに失敗しました');
        },
      );
    }
    return unscribe;
  }, []);
  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
          <Button
            style={emptyStyles.button}
            label="作成する"
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
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
const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
export default MemoListScreen;

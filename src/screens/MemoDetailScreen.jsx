import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);
  // console.log(id);
  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        // console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          upDateAt: data.upDateAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>{memo && memo.bodyText}</Text>
        {/* <Text style={styles.memoDate}>{memo && String(memo.upDateAt)}</Text> */}
      </View>
      <ScrollView style={styles.memoBody}>
        <Text>買い物リスト テキストテキストテキスト</Text>
      </ScrollView>
      <CircleButton
        name="pencil"
        color="#fff"
        style={{ top: 60, botom: 'auto' }}
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      />
    </View>
  );
}
MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244,223,186,0.3)',
  },
  memoHeader: {
    backgroundColor: 'rgba(202,150,92,0.8)',
    justifyContent: 'center',
    height: 96,
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
});
export default MemoDetailScreen;

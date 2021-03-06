import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';
import firebase from 'firebase';
import Icon from './Icon';
import { dateToString } from '../utils';

function MemoList(props) {
  // eslint-disable-next-line react/prop-types
  const { memos } = props;
  const navigation = useNavigation();
  function deleteMemo(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモを削除します。', 'よろしいですか？', [
        {
          text: 'キャンセル',
          onPress: () => {},
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました。');
            });
          },
        },
      ]);
    }
  }
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail', {
            id: item.id,
          });
        }}
      >
        <View style={styles.memoInner}>
          <Text style={styles.memoListTitle} numberOfLines={1}>
            {item.bodyText}
          </Text>
          <Text style={styles.memoListDate}>
            {dateToString(item.updatedAt)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => deleteMemo(item.id)}
          style={styles.memoDelete}
        >
          <Icon name="delete" size={24} color="#876445" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
MemoList.propsTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    })
  ).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: 'rgba(244,223,186,0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomColor: '#CA965C',
    borderBottomWidth: 1,
  },
  memoInner: {
    flex: 1,
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoListDate: {
    fontSize: 10,
    lineHeight: 16,
    color: '#666666',
  },
  memoDelete: {
    padding: 8,
  },
});
export default MemoList;

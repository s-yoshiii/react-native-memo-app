import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import Icon from './Icon';

function MemoList(props) {
  // eslint-disable-next-line react/prop-types
  const { memos } = props;
  const navigation = useNavigation();
  return (
    <View>
      {memos.map((memo) => (
        <TouchableOpacity
          key={memo.id}
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate('MemoDetail');
          }}
        >
          <View>
            <Text style={styles.memoListTitle}>{memo.bodyText}</Text>
            <Text style={styles.memoListDate}>{String(memo.updatedAt)}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Alert.alert('Are you sure');
            }}
            style={styles.memoDelete}
          >
            <Icon name="delete" size={24} color="#876445" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}
MemoList.propsTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      upDateAt: instanceOf(Date),
    })
  ).isRequired,
};
const styles = StyleSheet.create({
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

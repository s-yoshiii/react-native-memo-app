import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function MemoList() {
  return (
    <View style={styles.memoListItem}>
      <View>
        <View style={styles.memoListTitle}>買い物リスト</View>
        <View style={styles.memoListDate}>2022/06/06 0:00:00</View>
      </View>
      <TouchableOpacity>
        <Icon name="delete" size={24} color="#876445" />
      </TouchableOpacity>
    </View>
  );
}
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
});
export default MemoList;

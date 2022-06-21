import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2022/06/06 0:00:00</Text>
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
  memoDelete: {
    padding: 8,
  },
});
export default MemoList;

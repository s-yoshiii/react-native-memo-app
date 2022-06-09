import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';
import MemoList from '../components/MemoList';

function MemoListScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <MemoList />
      <CircleButton>+</CircleButton>
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

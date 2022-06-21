import React from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';

function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2022/06/06 0:00:00</Text>
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

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CircleButton from '../components/CircleButton';
import Header from '../components/Header';

function MemoDetailScreen() {
  return (
    <View>
      <Header />
      <View>
        <Text>買い物リスト</Text>
        <Text>2022/06/06 0:00:00</Text>
      </View>
      <ScrollView>
        <Text>買い物リスト テキストテキストテキスト</Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}

export default MemoDetailScreen;

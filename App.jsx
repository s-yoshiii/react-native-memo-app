import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Memo App</Text>
        <Text>ログアウト</Text>
      </View>
      <View>
        <View>
          <View>買い物リスト</View>
          <View>2022/06/06 0:00:00</View>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
      <View>
        <View>
          <View>買い物リスト</View>
          <View>2022/06/06 0:00:00</View>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
      <View>
        <View>
          <View>買い物リスト</View>
          <View>2022/06/06 0:00:00</View>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

function LogOutButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: '#fff',
  },
});

export default LogOutButton;

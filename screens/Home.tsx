import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'native-base';
import { logout } from '../firebase';


export default function HomeScreen() {

  const handleLogout = () => {
    logout();
  }

  return (
    <View style={styles.container}>
      <Text>Home screen!</Text>
      <StatusBar style="auto" />
      <Button onPress={handleLogout}>
        LogOut
      </Button>
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

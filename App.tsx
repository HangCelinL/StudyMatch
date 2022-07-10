import React from 'react';
import './config/FirebaseConfig';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useColorScheme from './hooks/useColorScheme';

import { NativeBaseProvider, Text, Box } from 'native-base';
import { extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import HomeScreen from './screens/Home';

import * as SecureStore from 'expo-secure-store';
import AppBar from './components/Appbar';
import ProfileScreen from './screens/ProfileScreen';
import { AuthProvider } from './contexts/AuthProvider';
import { Router } from './navigation/Router';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Router></Router>
          {/* <Stack.Navigator>
            <Stack.Screen name="SignIn" component={LogInScreen} options={{ title: 'Log in' }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator> */}
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
}


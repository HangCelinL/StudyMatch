import { Pressable, StyleSheet } from 'react-native';

import { View } from '../components/Themed';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { logout } from '../firebase';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  VStack,
  Card,
  ScrollView,
  IconButton,
  Icon
} from 'native-base';
import UserCard from '../components/UserCard';
import { User } from '../types/user';
import AppBar from '../components/Appbar';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {


  return (
    <View>

      <AppBar />
      <ScrollView>
        <Text>
          Profile
        </Text>
      </ScrollView>
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

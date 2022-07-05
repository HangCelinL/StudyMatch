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

export default function HomeScreen() {

  const handleLogout = () => {
    logout();
  }

  const [users, setUsers] = useState<User[]>();

  return (
    <View>

      <AppBar />
      <ScrollView>
        <VStack space={4} alignItems="center">
          {users?.map((user: User) => (
            <UserCard
              name={user.firstName}
              description={user.description}
              id={user.id}
              courses={user.courses}
            />
          ))}
        </VStack>
      </ScrollView>

      <Box marginTop={5} marginRight={5} marginBottom={5} marginLeft={5}>
        <Box rounded="pill" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
          <Image
            roundedTop="pill"
            h={56}
            source={{
              uri: 'https://image.freepik.com/free-photo/clown-anemonefish-amphiprion-swimming-among-tentacles-its-anemone-home_211453-2.jpg',
            }}
            alt="NativeBase Card"
          />
          <Stack p={4} space={3}>
            <Heading color={useColorModeValue('blueGray.700', 'blueGray.100')}>
              Clownfish
            </Heading>
            <Text color={useColorModeValue('blueGray.500', 'blueGray.200')}>
              Bright orange with three distinctive white bars, clown anemonefish are
              among the most recognizable at all reef-dwellers.
            </Text>
            <HStack space={4}>
              <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
                Message
              </Button>
              <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
                Like
              </Button>
              <Button variant="ghost" colorScheme="blue" p={0} minH={0}>
                View profile
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Box>

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

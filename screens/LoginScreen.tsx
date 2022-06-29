
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackParamList, RootStackScreenProps } from '../types';


import { MonoText } from '../components/StyledText';
import { Box, Center, FormControl, Heading, HStack, Icon, Input, Link, Stack, VStack } from 'native-base';
import { Button } from "native-base";
import { StackScreenProps } from '@react-navigation/stack';

import { getAuth, } from 'firebase/auth';
import { signInWithGoogle, logInWithEmailAndPassword } from '../firebase';
import { useState } from 'react';

export default function LogInScreen({ navigation }: RootStackScreenProps<'SignIn'>) {

  const auth = getAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
          Welcome to StudyMatch!
        </Heading>
        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
              Forgot Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => {
            console.log("hei", email);
            logInWithEmailAndPassword(email.toLowerCase(), password)
          }}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Link onPress={() => {
              navigation.navigate('SignUp')
            }} _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const styles2 = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});




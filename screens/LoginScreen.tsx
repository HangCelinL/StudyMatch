import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as WebBrowser from 'expo-web-browser';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import React from 'react';
import { Box, Icon, Input, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "native-base";

export default function LoginScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [show, setShow] = React.useState(false);

  return (
    <View style={styles1.container}>
      <Text style={styles1.title}>Welcome to StudyMatch!</Text>
      <View style={styles1.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>

        <View style={styles2.getStartedContainer}>
          <Text
            style={styles2.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Log in
          </Text>

          <Stack space={4} w="100%" alignItems="center">
            <Input w={{
              base: "100%",
              md: "0%"
            }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
            <Input w={{
              base: "100%",
              md: "0%"
            }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
          </Stack>

          <Text>
            <Box alignItems="center">
              <Button onPress={() => console.log("hello world")}>Log in</Button>
            </Box>;
          </Text>

        </View>
      </View>
    </View>
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




import { Box, Button, Center, FormControl, Heading, Input, VStack } from "native-base";
import { useState } from "react";
//import * as firebase from "firebase";
import * as firebase from "@firebase/app"
//import "@firebase/auth"
import { registerWithEmailAndPassword } from "../firebase";
import { RootStackScreenProps } from "../types";

export default function SignUpScreen({ navigation }: RootStackScreenProps<'SignUp'>) {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
          Welcome to StudyMatch!
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          Sign up to continue
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input value={name} onChangeText={(text) => setName(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => {
            console.log("hei", email);
            registerWithEmailAndPassword(name, email.toLowerCase(), password)
          }}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}




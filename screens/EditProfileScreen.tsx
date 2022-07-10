import { Box, Button, Center, FormControl, Heading, Input, VStack } from "native-base";
import { useEffect, useState } from "react";
//import * as firebase from "firebase";
import * as firebase from "@firebase/app"
//import "@firebase/auth"
import { createUser, getUserByID, registerWithEmailAndPassword } from "../firebase";
import { RootStackScreenProps } from "../types";
import { Avatar } from "native-base";
import { useForm } from 'react-hook-form';
import { User } from "../types/user";
import { useAuth } from "../contexts/AuthProvider";

export default function EditProfileScreen({ navigation }: RootStackScreenProps<'Profile'>) {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [courses, setCourses] = useState<string>("");

  const { user } = useAuth();

  const { handleSubmit } = useForm();

  const [visibility, setVisibility] = useState<boolean>(true);
  const [showSave, setSaveButton] = useState<string>('none');
  const [showEdit, setEditButton] = useState<string>('flex');
  const [readOnly, setHeader] = useState<string>('Read Only');

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  useEffect(() => {
    if (user === null) {
      console.log('Failed to load user');
      return;
    }
  }, []);

  const onSubmit = handleSubmit(async () => {
    if (user == null) {
      return;
    }
    try {
      await createUser(name, email, user?.uid);
      handleOpen();
      handleVisibility();
    } catch (err) {
      console.log(err);
    }
  });

  const handleVisibility = () => {
    console.log(visibility);
    if (visibility === false) {
      setVisibility(true);
      setSaveButton('none');
      setEditButton('flex');
      setHeader('Read Only');
    } else {
      setVisibility(false);
      setSaveButton('flex');
      setEditButton('none');
      setHeader('');
    }
  };

  return (

    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Avatar bg="green.500" alignSelf="center" marginBottom={10} size="2xl" source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}>
        </Avatar>

        <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
          Your Profile
        </Heading>

        <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
          Read only
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
            <FormControl.Label>Description</FormControl.Label>
            <Input value={description} onChangeText={(text) => setDescription(text)} />
          </FormControl>

          <FormControl>
            <FormControl.Label>Courses</FormControl.Label>
            <Input value={courses} onChangeText={(text) => setCourses(text)} />
          </FormControl>

          <Button mt="2" colorScheme="indigo" onPress={() => {
            handleVisibility
          }}>
            Edit profile
          </Button>
        </VStack>
      </Box>
    </Center>

  );
}




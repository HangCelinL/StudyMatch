import { MaterialIcons } from "@expo/vector-icons";
import { Box, HStack, IconButton, Icon, Text, StatusBar, Button } from "native-base";
import { Avatar } from "native-base";
import React, { useState } from "react";
import ProfileScreen from "../screens/ProfileScreen";
import { RootStackScreenProps } from "../types";
import { ProfileScreenNavigationProp } from "../types";
import MenuBar from "./Menu";

export default function AppBar() {

  return <>
    <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="#6200ee" />
    <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="400">
      {/* <MenuBar route={'Profile'} navigation={}></MenuBar> */}
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack alignItems="center">
      </HStack>
      <HStack>
        <Avatar bg="green.500" marginRight={2} source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}>
        </Avatar>
      </HStack>
    </HStack>
  </>;
}


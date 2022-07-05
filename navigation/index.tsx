/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './UserStack';
import AuthStack from './AuthStack'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const { user } = useAuthentication();

  return (
    user ? <UserStack /> : <AuthStack />
  );
}



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../contexts/AuthProvider';
import { Loading } from '../components/Loading';

export const Router = () => {
  const { user } = useAuth();

  /*  if (loading) {
     return <Loading />;
   } */
  return (
    user ? <AppStack /> : <AuthStack />
  );
};
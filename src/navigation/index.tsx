/* eslint-disable */
import React from 'react';
import { AppNavigator, AuthNavigator } from './navigators';
import { userSelectors } from '../state/features/user';
import { useAppSelector } from '../state/hooks';

const RootNavigator: React.FC = () => {
  const token = useAppSelector(userSelectors.getToken);
  
  return (
    token
      ? <AppNavigator />
      : <AuthNavigator />
  );
};

export default RootNavigator;

/* eslint-disable */
import React from 'react';
import { AppNavigator, AuthNavigator } from './navigators';

const RootNavigator: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);
  return (
    isSignedIn
      ? <AppNavigator />
      : <AuthNavigator setIsSignedIn={setIsSignedIn} />
  );
};

export default RootNavigator;

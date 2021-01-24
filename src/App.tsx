import './App.css';

import { AuthenticatedApp } from 'AuthenticatedApp';
import { useAuthContext } from 'providers/AuthProvider';
import React from 'react';
import { UnauthenticatedApp } from 'UnauthenticatedApp';

export const App: React.FunctionComponent = (): JSX.Element => {
  const { user } = useAuthContext();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
};

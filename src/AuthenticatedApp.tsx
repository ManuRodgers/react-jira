import { ProjectList } from 'pages';
import { useAuthContext } from 'providers/AuthProvider';
import React from 'react';

export const AuthenticatedApp = (): JSX.Element => {
  const { logout } = useAuthContext();
  return (
    <div>
      <ProjectList />
      <button onClick={logout}>logout</button>
    </div>
  );
};

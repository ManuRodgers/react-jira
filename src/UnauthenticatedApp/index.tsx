import React, { useState } from 'react';

import { Login } from './Login';
import { Register } from './Register';

export const UnauthenticatedApp = (): JSX.Element => {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      {isRegistered ? <Register /> : <Login />}{' '}
      <button onClick={() => setIsRegistered(!isRegistered)}>
        Switch to {isRegistered ? 'Login' : 'Register'}
      </button>
    </>
  );
};

import { useAuthContext } from 'providers/AuthProvider';
import React, { useCallback } from 'react';

export const Register: React.FunctionComponent = () => {
  const { register } = useAuthContext();
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
      const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
      register({ username, password });
    },
    [register]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        username: <input type="text" id="username" />
      </label>
      <label htmlFor="password">
        password: <input type="password" id="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

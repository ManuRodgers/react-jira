import React, { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ILoginProps {}
const apiUrl = process.env.REACT_APP_API_URL;
export const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const login = (param: { username: string; password: string }): void => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
        // return response.json();
        return '';
      }
    });
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        username: <input type="text" id="username" />
      </label>
      <label htmlFor="password">
        password: <input type="password" id="password" />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

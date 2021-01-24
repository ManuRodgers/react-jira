import { AuthForm, IUser } from 'providers/AuthProvider';

const localStorageKey = '__auth_provider_token__';
const apiUrl = process.env.REACT_APP_API_URL;
export const getUserToken = (): string | null =>
  window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: IUser }): IUser => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const login = async (data: AuthForm): Promise<IUser> => {
  const response = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    return Promise.reject(data);
  }
};
export const register = async (data: AuthForm): Promise<IUser> => {
  const response = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    return Promise.reject(data);
  }
};

export const logout = async (): Promise<void> =>
  window.localStorage.removeItem(localStorageKey);

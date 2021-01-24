import * as auth from 'auth-provider';
import { useMount } from 'hooks';
import React, { useContext, useState } from 'react';
import { http } from 'utils/http';

export interface AuthForm {
  username: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email?: string;
  title?: string;
  organization?: string;
  token?: string;
}

export type AuthContextState = {
  user: IUser | null;
  login: (form: AuthForm) => void;
  register: (form: AuthForm) => void;
  logout: () => void;
};
export const bootstrapUser = async (): Promise<any> => {
  let user = null;
  const token = auth.getUserToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<AuthContextState | undefined>(
  undefined
);
AuthContext.displayName = 'AuthContext';

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent = ({
  children,
}: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  useMount(async () => setUser(await bootstrapUser()));
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextState => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return authContext;
};

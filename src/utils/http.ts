import * as auth from 'auth-provider';
import { useAuthContext } from 'providers/AuthProvider';
import qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;

interface HttpFetchConfig extends RequestInit {
  data?: string;
  token?: string | null;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: HttpFetchConfig = {}
): Promise<any> => {
  const config: RequestInit = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    // customConfig 里面的请求方法会覆盖默认的GET 方法
    ...customConfig,
  };
  if (config.method?.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  const response = await fetch(`${apiUrl}/${endpoint}`, config);
  if (response.status === 401) {
    await auth.logout();
    window.location.reload();
    return Promise.reject({ message: 'Please login again' });
  }
  const data_1 = await response.json();
  if (response.ok) {
    return data_1;
  } else {
    return Promise.reject(data_1);
  }
};

export const useHttp = (): any => {
  const { user } = useAuthContext();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

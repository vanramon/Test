import data from './data.json';

export interface ChildData {
  key: string;
  name: string;
  children?: ChildData[];
}

export interface Data {
  key: string;
  name: string;
  children?: ChildData[] | undefined;
}

export const getData = () => {
  return new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

const USERNAME = 'admin';
const PASSWORD = 'password';

type LoginResponse = {
  token: string;
};

export const login = (username: string, password: string) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      if (username === USERNAME && password === PASSWORD) {
        resolve({ token: '12345' });
      } else {
        reject({ error: 'Invalid credentials' });
      }
    }, 2000);
  });
};

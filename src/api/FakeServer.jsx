import { data } from '../data/data.js';

export const FakeData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export const FakeLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve({ succes: true });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 2000);
  });
};

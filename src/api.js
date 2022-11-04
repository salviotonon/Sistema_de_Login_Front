/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

const fakeUser = {
  name: 'Usuario1',
  email: 'email@example.com',
  avatarUrl: './assets/images/felipe-avatar.jpg',
};
class API {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  setDefaultHeader(headerKey, value) {
    this.api.defaults.headers.common[headerKey] = value;
  }

  unsetDefaultHeader(headerKey) {
    this.api.defaults.headers.common[headerKey] = null;
  }

  login({ name, password }) {
    return new Promise((resolve) => {
      resolve({
        user: fakeUser,
        token: 'tokenexample',
      });
    });
  }

  signup({
    name, email, password, confirmPassword,
  }) {
    return new Promise((resolve) => {
      resolve({
        user: fakeUser,
        token: 'tokenexample',
      });
    });
  }

  validate({ token }) {
    return new Promise((resolve) => {
      resolve({ user: fakeUser });
    });
  }
}

const api = new API();

export { api };

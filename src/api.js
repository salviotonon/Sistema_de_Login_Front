/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { APIError } from './errors/APIErrors';

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
    return new Promise((resolve, reject) => {
      if (name !== fakeUser.name) {
        reject(new APIError(404, 'Usuário não encontrado.'));
      }

      if (password === 'wrongtest') {
        reject(new APIError(401, 'Senha incorreta.'));
      }

      resolve({
        user: fakeUser,
        token: 'tokenexample',
      });
    });
  }

  signup({
    name, email, password, confirmPassword,
  }) {
    return new Promise((resolve, reject) => {
      if (name === fakeUser.name) {
        reject(new APIError(400, 'Nome já em uso.'));
      }

      if (email === fakeUser.email) {
        reject(new APIError(400, 'E-mail já cadastrado.'));
      }

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
